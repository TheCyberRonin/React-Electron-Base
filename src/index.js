import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

document.addEventListener('drop', (e) =>
{
  e.preventDefault();
  e.stopPropagation();
  return false;
});

document.addEventListener('dragover', (e) =>
{
  e.preventDefault();
  e.stopPropagation();
});