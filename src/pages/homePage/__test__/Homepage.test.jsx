import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../Homepage";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { AuthProvider } from "../../../contexts/Contexts";

vi.mock("../../../components/navbar/Navbar.jsx");
vi.mock("../../../services/authentication", () => ({
  register: vi.fn().mockReturnValueOnce({
    data: {
      status: 200,
    },
  }),
}));

describe("SignIn component", () => {
  const setupTest = () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Home/>
        </AuthProvider>
      </BrowserRouter>
    );
  };

  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByText("Blog Station");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByText("Blogging which you can share extraordinary ideas");
    expect(titleElement).toBeInTheDocument();
  });


  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByText("Login & Start your journey with us");
    expect(titleElement).toBeInTheDocument();
  });


  test("Go to Sign in page when clicked", () => {
    setupTest();
    const signUpLink = screen.getByTestId("home");
    expect(signUpLink).toBeInTheDocument();
    fireEvent.click(signUpLink);
    expect(window.location.pathname).toBe("/login");
  });


});