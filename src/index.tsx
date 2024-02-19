import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu/Menu';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  // <React.StrictMode>
  <>
    <Menu />
    <App />
  </>
  // </React.StrictMode>
);



