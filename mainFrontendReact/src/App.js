import React from "react";
import { Header } from "./Header.js";
import { NavBtns } from "./NavBtns.js";
import { APIcall } from "./APIcall.js";
import { Footer } from "./Footer.js";
import { Questions, RenderQuestion } from "./Question.js";

function App() {
  return (
    <div class="bg-gray-400 flex flex-col min-h-screen">
      <Header name="Office" />
      {/* <NavBtns /> */}
      {/* <APIcall /> */}
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
