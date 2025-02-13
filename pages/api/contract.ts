import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { action, address } = req.query;
  const apiKey = process.env.BSCSCAN_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'BSCScan API key not configured' });
  }

  if (!address) {
    return res.status(400).json({ error: 'Address parameter is required' });
  }

  const baseUrl = 'https://api.bscscan.com/api';
  const url = `${baseUrl}?module=contract&action=${action}&address=${address}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === '0') {
      return res.status(400).json({ error: data.result });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from BSCScan' });
  }
} 