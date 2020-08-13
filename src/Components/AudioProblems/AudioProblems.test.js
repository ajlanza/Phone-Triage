import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AudioProblems from './AudioProblems';

test('AudioProblems renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AudioProblems /></BrowserRouter>, div);
});