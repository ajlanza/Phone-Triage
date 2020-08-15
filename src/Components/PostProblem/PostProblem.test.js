import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PostProblem from './PostProblem';

test('PostProblem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostProblem /></BrowserRouter>, div);
});