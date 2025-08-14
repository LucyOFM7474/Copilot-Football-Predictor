export async function sendMessage(match: string): Promise<string> {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ match }),
  });

  if (!response.ok) {
    throw new Error('Eroare la API local');
  }

  const data = await response.json();
  return data.result;
}
