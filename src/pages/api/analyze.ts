import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { match } = req.body;

  const prompt = `
Vreau o analiză detaliată a meciului de fotbal "${match}", în formatul următor:

1. Surse & predicții externe (cote reale, site-uri de pariuri, tendințe)
2. Istoric direct (H2H) – scoruri exacte, cine a câștigat
3. Forma echipei gazdă – ultimele 5 meciuri, scoruri, adversari
4. Forma echipei oaspete – ultimele 5 meciuri, scoruri, adversari
5. Clasament & motivație – poziție în ligă, obiective
6. Statistici goluri – medie goluri marcate/primite
7. Statistici cornere – medie cornere pe meci
8. Jucători cheie – nume, rol, formă recentă
9. Predicție scor – realistă, pe baza datelor
10. Recomandări pariuri – 1X2, GG/NG, cornere, under/over

⚠️ Nu inventa scoruri sau statistici. Folosește date reale sau, dacă nu sunt disponibile, spune clar că nu sunt. Fii concis, fără repetiții. Formatul trebuie să fie clar, cu puncte numerotate.`;

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
