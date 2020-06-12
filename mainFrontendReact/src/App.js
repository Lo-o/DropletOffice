import React from "react";
import { Header } from "./Header.js";
import { NavBtns } from "./NavBtns.js";
import { APIcall } from "./APIcall.js";
import { Footer } from "./Footer.js";
import { Question } from "./Question.js";

function App() {
  return (
    <div class="bg-gray-400 flex flex-col min-h-screen">
      <Header name="Office" />
      {/* <NavBtns /> */}
      {/* <APIcall /> */}
      <Question />
      <Footer />
    </div>
  );
}

export default App;
