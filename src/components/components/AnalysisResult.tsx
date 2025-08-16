import React from 'react';

interface MatchAnalysisProps {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
}

const AnalysisResult: React.FC = () => {
  const match: MatchAnalysisProps = {
    teamA: 'FC Argeș',
    teamB: 'Dinamo București',
    scoreA: 2,
    scoreB: 1,
  };

  const winner =
    match.scoreA > match.scoreB
      ? match.teamA
      : match.scoreA < match.scoreB
      ? match.teamB
      : 'Remiză';

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Rezultatul Analizei</h2>
      <p>
        <strong>{match.teamA}</strong> vs <strong>{match.teamB}</strong>
      </p>
      <p>
        Scor final: {match.scoreA} - {match.scoreB}
      </p>
      <p className="mt-2">
        <strong>Câștigător:</strong> {winner}
      </p>
    </div>
  );
};

export default AnalysisResult;
