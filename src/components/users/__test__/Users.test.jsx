
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
//import {getAllUsers} from "../Users";
import Users from "../Users";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { AuthProvider } from "../../../contexts/Contexts";
import { getAllUsers } from "../../../services/userList";

vi.mock("../../../components/navbarDashBoard/NavbarDashboard.jsx");
    

vi.mock("../../../services/userList", () => ({
  getAllUsers: vi.fn().mockReturnValue(
    [
        {
            id: "2c69d6e5-ec7d-4acd-82b0-146cdf986a96",
            username: "arif",
            email: "arif@gmail.com",
            createdAt: "2023-05-15T04:58:46.000Z",
            updatedAt: "2023-05-15T11:37:30.000Z"
        },
        {
            id: "223432c69d6e5-ec7d-4acd-82b0-146cdf986a96",
            username: "hasan",
            email: "hasan@gmail.com",
            createdAt: "2023-05-15T04:58:46.000Z",
            updatedAt: "2023-05-15T11:37:30.000Z"
        }
    ]
),
}));



describe("User list component", () => {
  const setupTest = () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Users/>
        </AuthProvider>
      </BrowserRouter>
    );
  };


  it("Email test", () => {
    setupTest();

    const expectedResult = [
      {
          id: "2c69d6e5-ec7d-4acd-82b0-146cdf986a96",
          username: "arif",
          email: "arif@gmail.com",
          createdAt: "2023-05-15T04:58:46.000Z",
          updatedAt: "2023-05-15T11:37:30.000Z"
      },
      {
          id: "223432c69d6e5-ec7d-4acd-82b0-146cdf986a96",
          username: "hasan",
          email: "hasan@gmail.com",
          createdAt: "2023-05-15T04:58:46.000Z",
          updatedAt: "2023-05-15T11:37:30.000Z"
      }
  ]

  console.log("expectedResult", getAllUsers);
  const response =  getAllUsers();
  console.log("response", expectedResult);
  expect(response).toEqual(expectedResult);;  
  });

  


//   test("If not logged in, go to dashboard", () => {
//     // Object.defineProperty(window.document, "cookie", {
//     //   writable: true,
//     //   value:
//     //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJzIiwiaWF0IjoxNjg0ODI2NTY5LCJleHAiOjE2ODQ4Mzg1Njl9.doKbBmMvqs2HoefVsobJWuNZrkX1gRh8fSiKq8Ikk6Q",
//     // });

//     render(
//       <BrowserRouter>
//         <AuthProvider>
//           <Profile />
//         </AuthProvider>
//       </BrowserRouter>
//     );
//     expect(window.location.pathname).toBe("/dashboard");
//   });



//   test("Back button test", () => {
//     setupTest();
//     const signUpLink = screen.getByTestId("back");
//     expect(signUpLink).toBeInTheDocument();
//     fireEvent.click(signUpLink);
//     expect(window.location.pathname).toBe("/dashboard");
//   });


});