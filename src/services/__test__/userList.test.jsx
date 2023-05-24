
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/Contexts";
    
describe("Profile component", () => {
  test("If not logged in, go to dashboard", () => {
    Object.defineProperty(window.document, "cookie", {
      writable: true,
      value:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJzIiwiaWF0IjoxNjg0ODI2NTY5LCJleHAiOjE2ODQ4Mzg1Njl9.doKbBmMvqs2HoefVsobJWuNZrkX1gRh8fSiKq8Ikk6Q",
    });
    render(
      <BrowserRouter>
        <AuthProvider>
          <userList />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(window.location.pathname).toBe("/");
  });
});