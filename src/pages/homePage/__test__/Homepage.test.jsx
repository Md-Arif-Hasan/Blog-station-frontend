import { render, screen } from '@testing-library/react';
import React from 'react';

import HomePage from '../Homepage';

it('should render the title correctly', () => {
  render(<HomePage />);
  const titleElement = screen.getByText('Bzcasdsd');
  expect(titleElement).toBeInTheDocument();
});


it('should render the title correctly', () => {
  render(<HomePage />);
  const titleElement = screen.getByText('Blogging which you can share extraordinary ideas');
  expect(titleElement).toBeInTheDocument();
});


