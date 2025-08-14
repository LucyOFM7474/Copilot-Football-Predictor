import { useState } from 'react';
import { sendMessage } from '../utils/openai';

export default function Home() {
  const [match, setMatch] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAnalysis('');
    try {
      const response = await sendMessage(match);
      setAnalysis(response);
    } catch (error) {
      setAnalysis('A apărut o eroare la generarea analizei.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '800px', margin: 'auto' }}>
      <h1>🔍 Analiză meci fotbal</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
          placeholder="Ex: Västerås SK vs Trelleborgs FF"
          style={{
            width: '70%',
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          type="submit"
          disabled={loading || !match.trim()}
          style={{
            marginLeft: '1rem',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Se generează...' : 'Analizează'}
        </button>
      </form>

      {analysis && (
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '1rem',
            borderRadius: '8px',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        >
          <h2>📋 Rezultatul analizei:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}
