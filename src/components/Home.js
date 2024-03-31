import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1> Your Name is a Web Developer from { city }
      <span style={ { color: "firebrick" } }>{ name }</span></h1>
  </div >;
}

export default Home;
