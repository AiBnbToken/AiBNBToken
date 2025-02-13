import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type DexPair = {
  baseToken?: {
    name?: string;
    symbol?: string;
  };
  priceUsd?: string;
  priceChange?: {
    h24?: number;
  };
  volume?: {
    h24?: number;
  };
  liquidity?: {
    usd?: number;
  };
  dexId?: string;
  pairAddress?: string;
  fdv?: number;
  holders?: number;
  totalSupply?: string;
};

type ApiResponse = {
  address: string;
  name: string;
  symbol: string;
  price: string;
  priceChange24h: string;
  volume24h: string;
  liquidity: string;
  dex: string;
  pairAddress: string;
  marketCap: string;
  holders?: string;
  totalSupply?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query;

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Valid address parameter is required' });
  }

  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/tokens/${address}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0'
        },
        timeout: 8000
      }
    );

    if (!response.ok) {
      throw new Error(`DexScreener API error: ${response.status}`);
    }

    const data = await response.json();
    const pairs = data.pairs || [];
    const sortedPairs = pairs.sort((a: DexPair, b: DexPair) => 
      (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0)
    );
    const pair = sortedPairs[0];

    if (!pair) {
      return res.status(404).json({ error: 'Token not found on DexScreener' });
    }

    const formatUSD = (num?: number) => {
      if (!num) return 'N/A';
      if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
      if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
      if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
      return `$${num.toFixed(2)}`;
    };

    const formatPrice = (price?: string) => {
      if (!price) return 'N/A';
      const numPrice = parseFloat(price);
      if (numPrice < 0.000001) {
        return `$${numPrice.toExponential(6)}`;
      }
      return `$${numPrice.toFixed(numPrice < 0.01 ? 8 : 4)}`;
    };

    const responseData: ApiResponse = {
      address,
      name: pair.baseToken?.name || 'N/A',
      symbol: pair.baseToken?.symbol || 'N/A',
      price: formatPrice(pair.priceUsd),
      priceChange24h: pair.priceChange?.h24 ? `${pair.priceChange.h24.toFixed(2)}%` : 'N/A',
      volume24h: formatUSD(pair.volume?.h24),
      liquidity: formatUSD(pair.liquidity?.usd),
      dex: pair.dexId || 'N/A',
      pairAddress: pair.pairAddress || 'N/A',
      marketCap: formatUSD(pair.fdv),
      holders: pair.holders?.toString() || 'N/A',
      totalSupply: pair.totalSupply ? `${Number(pair.totalSupply).toLocaleString()}` : 'N/A'
    };

    return res.status(200).json(responseData);

  } catch (error) {
    console.error('API Error:', error);
    return res.status(502).json({ 
      error: 'Failed to fetch token data from DexScreener' 
    });
  }
} 