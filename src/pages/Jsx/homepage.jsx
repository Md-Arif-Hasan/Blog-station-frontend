import "../Styles/homepage.css";
import Navbar from "../../components/Jsx/Navbar";

import * as React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container"  style={{ padding: "1rem 4rem 1.5rem" }}>
        <h1 >Blog Station</h1>
        <h1>
        “Blogging is a simple way through which you can share extraordinary ideas.”
        </h1>
       <h1><a href="./login">Login & Start your journey with us!</a>  </h1> 
      </div>
    </>
  );
}
