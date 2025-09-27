import { useState, type ReactElement } from 'react';

export function App(): ReactElement {
  const [label, setLabel] = useState('desktop');

  const toggleLabel = () => {
    setLabel((current) => (current === 'desktop' ? '🍐' : 'desktop'));
  };

  return (
    <main>
      <h1 onClick={toggleLabel}>{label}</h1>
    </main>
  );
}
