import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { vi } from 'vitest'

import FullBlog from '../FullBlog';
vi.mock("../../../components/navbarDashBoard/NavbarDashboard")
describe("SignIn component", () => {
  const setupTest = () => {
    render(
        <BrowserRouter>
          <FullBlog />
        </BrowserRouter>
    );
  };
it('should render the title correctly', () => {

setupTest();
  const titleElement = screen.getByText('Title:');
  expect(titleElement).toBeInTheDocument();
});

it('should render the description correctly', () => {
  setupTest();
    const titleElement = screen.getByText('Description:');
    expect(titleElement).toBeInTheDocument();
  });
  

});
