import React from 'react';

interface Props {
  result: string;
}

const AnalysisResult: React.FC<Props> = ({ result }) => {
  return (
    <div style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
      {result}
    </div>
  );
};

export default AnalysisResult;
