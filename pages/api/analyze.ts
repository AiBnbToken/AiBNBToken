import { OpenAI } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { content, type } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'No content provided' });
    }

    // Get token data from DexScreener
    const tokenData = await fetch(`/api/scan?address=${content}`).then(r => r.json());
    
    // Build analysis prompt
    const prompt = `Analyze this BSC token:
    Address: ${content}
    Name: ${tokenData.name}
    Price: ${tokenData.price}
    Liquidity: ${tokenData.liquidity}
    Volume 24h: ${tokenData.volume24h}
    Market Cap: ${tokenData.marketCap}
    
    Please provide:
    1. Quick risk assessment
    2. Liquidity analysis
    3. Trading pattern analysis
    4. Holder concentration risks
    5. Recommendations`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4-turbo-preview",
      temperature: 0.7,
      max_tokens: 1000
    });

    return res.status(200).json({
      analysis: completion.choices[0].message.content
    });

  } catch (error) {
    console.error('Analysis Error:', error);
    return res.status(500).json({ error: 'Failed to analyze token' });
  }
}