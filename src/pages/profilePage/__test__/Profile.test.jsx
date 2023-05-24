
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "../Profile";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { AuthProvider } from "../../../contexts/Contexts";


vi.mock("../../../components/navbarDashBoard/NavbarDashboard.jsx");
vi.mock("../../../services/user", () => ({
    updateUserByUsername: vi.fn().mockReturnValue({
    data: {
      status: 200,
      message: {
        "id": "2c69d6e5-ec7d-4acd-82b0-146cdf986a96",
        "username": "arif",
        "email": "arif@gmail.com",
        "password": "$2b$10$DVeQ8zrPCHeMh1s1trD5r.nJGD5iIqIpyzqL4imhxrSCnDLJjq5ca",
        "createdAt": "2023-05-15T04:58:46.000Z",
        "updatedAt": "2023-05-15T11:37:30.000Z"
    }
    },
  }),
}));


vi.mock("../../../services/user", () => ({
  getUserByUsername: vi.fn().mockReturnValue({
    data: 
        {
            id: "2c69d6e5-ec7d-4acd-82b0-146cdf986a96",
            username: "arif",
            email: "arif@gmail.com",
            createdAt: "2023-05-15T04:58:46.000Z",
            updatedAt: "2023-05-15T11:37:30.000Z"
        }
    }),
}));


describe("Profile component", () => {
  const setupTest = () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Profile/>
        </AuthProvider>
      </BrowserRouter>
    );
  };


  it("Email test", () => {
    setupTest();
    const titleElement = screen.getByText("Email Address");
    expect(titleElement).toBeInTheDocument();
  });

  
  it("user name test", () => {
    setupTest();
    const titleElement = screen.getByText("User Name");
    expect(titleElement).toBeInTheDocument();
  });


  it("Old password test", () => {
    setupTest();
    const titleElement = screen.getByText("Old Password");
    expect(titleElement).toBeInTheDocument();
  });

  
  it("New Password test", () => {
    setupTest();
    const titleElement = screen.getByText("New Password");
    expect(titleElement).toBeInTheDocument();
  });



  test("If not logged in, go to dashboard", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJzIiwiaWF0IjoxNjg0ODI2NTY5LCJleHAiOjE2ODQ4Mzg1Njl9.doKbBmMvqs2HoefVsobJWuNZrkX1gRh8fSiKq8Ikk6Q",
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe("/dashboard");
  });



  test("Back button test", () => {
    setupTest();
    const signUpLink = screen.getByTestId("back");
    expect(signUpLink).toBeInTheDocument();
    fireEvent.click(signUpLink);
    expect(window.location.pathname).toBe("/dashboard");
  });
});