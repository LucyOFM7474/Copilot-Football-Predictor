import { useState } from 'react';
import { sendMessage } from '../utils/openai';

export default function ChatBox() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setChat(prev => [...prev, `🧑: ${input}`]);
    setLoading(true);
    try {
      const reply = await sendMessage(input);
      setChat(prev => [...prev, `🤖: ${reply}`]);
    } catch (error) {
      setChat(prev => [...prev, `⚠️: Eroare la răspuns.`]);
    }
    setLoading(false);
    setInput('');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>
        {chat.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Scrie ceva..."
        style={{ width: '80%', padding: '0.5rem' }}
      />
      <button onClick={handleSend} disabled={loading} style={{ marginLeft: '0.5rem' }}>
        {loading ? 'Așteaptă...' : 'Trimite'}
      </button>
    </div>
  );
}
