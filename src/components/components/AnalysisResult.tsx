// src/components/AnalysisResult.tsx
import React from 'react';

const AnalysisResult = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-3xl font-bold text-center text-red-600">Predicție: Dinamo vs UTA</h1>

      {/* Surse */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">✅ Surse & Predicții</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>SportyTrader: <span className="text-green-600 font-bold">Confirmă</span></li>
          <li>Forebet: <span className="text-green-600 font-bold">Confirmă</span></li>
          <li>Predictz: <span className="text-green-600 font-bold">Confirmă</span></li>
        </ul>
      </section>

      {/* Medie Ponderată */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📊 Medie Ponderată</h2>
        <p className="text-gray-600">Scor estimat: <strong>2-1 pentru Dinamo</strong></p>
        <p className="text-gray-600">Tendința: <span className="text-red-600 font-bold">1 (victorie Dinamo)</span></p>
      </section>

      {/* Forma Recentă */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📈 Forma Recentă</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <div>
            <h3 className="font-bold text-red-500">Dinamo</h3>
            <p>V-V-I-V-V</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-500">UTA</h3>
            <p>I-P-V-I-I</p>
          </div>
        </div>
      </section>

      {/* Accidentări */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🚑 Situația Lotului</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Dinamo: Fără absențe importante</li>
          <li>UTA: Posibile absențe în defensivă</li>
        </ul>
      </section>

      {/* Statistici */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📊 Statistici Tactice</h2>
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Indicator</th>
              <th className="p-2">Dinamo</th>
              <th className="p-2">UTA</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr>
              <td className="p-2">Cartonașe</td>
              <td className="p-2">X</td>
              <td className="p-2">W</td>
            </tr>
            <tr>
              <td className="p-2">Cornere</td>
              <td className="p-2">Y</td>
              <td className="p-2">V</td>
            </tr>
            <tr>
              <td className="p-2">Posesie</td>
              <td className="p-2">Z%</td>
              <td className="p-2">K%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Predicție Finală */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🎯 Predicția Finală</h2>
        <p className="text-gray-600">Scor estimat: <strong>2-1 pentru Dinamo</strong></p>
        <ul className="list-disc list-inside text-green-600 font-semibold">
          <li>1X</li>
          <li>Peste 2.5 goluri</li>
          <li>BTTS (ambele marchează)</li>
        </ul>
      </section>

      {/* Știri */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📰 Știri de Ultimă Oră</h2>
        <p className="text-gray-600">UTA are probleme de lot și e posibil să aibă dificultăți.</p>
        <p className="text-gray-600">Dinamo are un moral ridicat și se așteaptă să obțină cele 3 puncte.</p>
      </section>
    </div>
  );
};

export default AnalysisResult;
