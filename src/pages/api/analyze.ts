import type { NextApiRequest, NextApiResponse } from 'next';
import { generatePrompt } from '../../utils/promptTemplate';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { match } = req.body;

  if (!match) return res.status(400).json({ error: 'Match name required' });

  const prompt = generatePrompt(match);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    res.status(200).json({ result: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
