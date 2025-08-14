export const sendMessage = async (match: string) => {
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

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
