
import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import Login from "../Login";
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
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
  };

  test("Console log user data when submit --------------", () => {
    setupTest();

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "johndoe" },
    });

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "1234qwer" },
    });

    const signUpLink = screen.getByTestId("login");
    expect(signUpLink).toBeInTheDocument();

    act(() => {
      fireEvent.click(signUpLink);
    });
    console.log("Pathhhhhhhhhh: ", window.location.pathname);
    expect(window.location.pathname).toBe("/");
  });


  test("Go to Sign in page when clicked", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJzIiwiaWF0IjoxNjg0ODI2NTY5LCJleHAiOjE2ODQ4Mzg1Njl9.doKbBmMvqs2HoefVsobJWuNZrkX1gRh8fSiKq8Ikk6Q",
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe("/dashboard");
  });


  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByTestId("loginbutton");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByText("Login");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the title correctly", () => {
    setupTest();
    const titleElement = screen.getByText("Don't have an account?");
    expect(titleElement).toBeInTheDocument();
  });
  
  test("Go to Sign in page when clicked", () => {
    setupTest();
    const signUpLink = screen.getByTestId("loginbutton");
    expect(signUpLink).toBeInTheDocument();
    fireEvent.click(signUpLink);
    expect(window.location.pathname).toBe("/register");
  });

  test("Console log user data when submit button is clicked", () => {
    setupTest();
    fireEvent.submit(screen.getByRole("button", { name: "Login" }));
    const signUpLink = screen.getByTestId("login");
    expect(signUpLink).toBeInTheDocument();
  });

});
