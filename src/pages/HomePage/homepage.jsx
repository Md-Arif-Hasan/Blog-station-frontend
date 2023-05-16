import "./homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import * as React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container"  style={{ padding: "1rem 4rem 1.5rem" }}></div>
        <div className="right">
          <h1 className="title">Blog Station</h1>
          <h2 className="quote">
          “Blogging is a simple way through<br /> which you can share extraordinary ideas.”
          </h2>
          <a href="./login" className="goToLogin">Login & Start your journey with us!</a>
        </div>
    </>
  );
}
