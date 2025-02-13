import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query;
  const apiKey = process.env.BSCSCAN_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'BSCScan API key not configured' });
  }

  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'Valid address parameter is required' });
  }

  try {
    const bscUrl = `https://api.bscscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=${apiKey}`;
    const bscResponse = await fetch(bscUrl);
    const bscData = await bscResponse.json();

    return res.status(200).json({
      address,
      name: bscData.result?.[0]?.ContractName || 'N/A',
      verified: bscData.result?.[0]?.SourceCode ? 'Yes' : 'No',
      compiler: bscData.result?.[0]?.CompilerVersion || 'N/A'
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to fetch data from BSCScan' });
  }
} 