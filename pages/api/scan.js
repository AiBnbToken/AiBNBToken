import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const { address } = req.query;
    if (!address) {
      return res.status(400).json({ error: 'No contract address provided.' });
    }

    // 1. Read BscScan API key from environment variables
    const apiKey = process.env.BSCSCAN_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'Missing BscScan API key. Please set BSCSCAN_API_KEY in your environment.'
      });
    }

    // 2. Call BscScan with "tokeninfo" endpoint (experimental).  
    //    This endpoint may provide name, symbol, totalSupply, decimals, etc.
    //    See: https://docs.bscscan.com/api-endpoints/token
    const url = `https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=${address}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    // 3. Check if BscScan returned valid data
    if (data.status !== '1' || !data.result || !data.result[0]) {
      return res.status(404).json({ error: 'Unable to fetch token details. Check contract address.' });
    }

    const tokenInfo = data.result[0];
    // Example fields: name, symbol, totalSupply, decimals, etc.
    const { tokenName, tokenSymbol, totalSupply, decimal } = tokenInfo;

    // 4. Optionally, fetch or calculate token price from a DEX aggregator or another service.
    //    For simplicity, we'll mock the price here.
    const mockPrice = (Math.random() * 0.01).toFixed(5); // Just a random low price for demonstration

    return res.status(200).json({
      name: tokenName,
      symbol: tokenSymbol,
      supply: totalSupply,
      decimals: decimal,
      price: mockPrice
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
} 