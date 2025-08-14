import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { match } = req.body;

  const prompt = `
Analizează meciul de fotbal "${match}" în formatul următor, pe baza datelor generale și a tendințelor echipelor:

1. Surse & predicții externe (actuale)
2. Istoric direct (H2H)
3. Forma echipei gazdă
4. Forma echipei oaspete
5. Clasament & motivație
6. Statistici goluri
7. Statistici cornere
8. Jucători cheie
9. Predicție scor
10. Recomandări pariuri (inclusiv cornere)

Fii clar, concis și folosește date realiste. Nu inventa scoruri improbabile.`;

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

    if (!response.ok) {
      return res.status(500).json({ error: 'OpenAI API error' });
    }

    const data = await response.json();
    res.status(200).json({ result: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
