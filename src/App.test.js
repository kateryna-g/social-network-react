import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SamuraiApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
