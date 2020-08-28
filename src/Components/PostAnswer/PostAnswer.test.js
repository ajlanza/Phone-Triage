import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PostAnswer from './PostAnswer';

test('PostProblem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><PostAnswer /></BrowserRouter>, div);
});