import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import '@denis-mahei/custom-normalizer/src/custom-normalizer.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
