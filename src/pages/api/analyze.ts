import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { match } = req.body;

  const prompt = `
Analizează meciul de fotbal "${match}" în formatul strict de mai jos. Nu inventa scoruri sau statistici dacă nu sunt disponibile. Fii concis, clar și structurat. Folosește simboluri precum ✅, ⚠️, ❌ unde e cazul.

1. Surse & Predicții:
- Include surse precum SportyTrader, Forebet, Predictz.
- Folosește ✅ pentru consens, ⚠️ pentru opinii parțiale.

2. Medie Ponderată a Predicțiilor:
- Calculează media estimată a scorului și tendinței (1X2, GG, under/over).

3. Impactul pe Pronostic:
- Forma echipelor, absențe, motivație.

4. Forma Recentă:
- Ultimele 5 meciuri, scoruri, adversari.

5. Situația Accidentărilor și Suspendărilor:
- Jucători cheie lipsă, impact.

6. Golgheterii Echipei:
- Cine marchează, câte goluri, câte din penalty.

7. Cartonașe, Cornere, Posesie:
- Medii pe meci, tendințe.

8. Predicția Finală Ajustată:
- Scor estimat realist + 3–5 recomandări clare (1X2, under/over, BTTS, cornere).

9. Evaluări Comparabile:
- Ce spun sursele de încredere, pariorii profesioniști.

10. Știri de Ultimă Oră și Zvornuri:
- Absențe, motivații, posibile aranjamente.

⚠️ Nu folosi fraze goale. Nu repeta idei. Formatul trebuie să fie clar, cu puncte numerotate.`;

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
