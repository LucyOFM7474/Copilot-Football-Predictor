import { useState } from 'react';
import AnalysisResult from '../components/AnalysisResult';

export default function Home() {
  const [match, setMatch] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ match }),
    });
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Analiză Meciuri ⚽</h1>
      <input
        type="text"
        value={match}
        onChange={(e) => setMatch(e.target.value)}
        placeholder="Ex: Dinamo vs UTA"
        style={{ width: '300px', padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Se generează...' : 'Generează analiza'}
      </button>

      {result && <AnalysisResult result={result} />}
    </div>
  );
}
