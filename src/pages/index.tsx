import { useState } from 'react';
import { sendMessage } from '../utils/openai';

export default function Home() {
  const [match, setMatch] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const analysis = await sendMessage(match);
      setResult(analysis);
    } catch (error) {
      setResult('A apărut o eroare. Încearcă din nou.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>Analiză Meci Fotbal ⚽</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
          placeholder="Ex: Real Madrid vs Barcelona"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
          }}
          required
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Se generează...' : 'Generează analiza'}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: 30, whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: 20 }}>
          {result}
        </div>
      )}
    </div>
  );
}
