import { createRoot } from 'react-dom/client';
import { App } from './App.js';

const rootElement = document.getElementById('app-root');

if (!rootElement) {
  throw new Error('Expected to find a root element to mount the React app.');
}

createRoot(rootElement).render(<App />);
