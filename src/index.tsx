import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';

import './reset.css';

const rootElement = document.querySelector('#root');
if(!rootElement) {
  throw new Error('Something went wrong. dpw6oi');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
