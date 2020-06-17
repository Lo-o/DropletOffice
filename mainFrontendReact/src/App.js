import React from "react";
import { Header } from "./Header.js";
import { NavBtns } from "./NavBtns.js";
import { APIcall } from "./APIcall.js";
import { Footer } from "./Footer.js";
import { Questions, RenderQuestion } from "./Question.js";

function App() {
  return (
    <div className="bg-gray-400 flex flex-col min-h-screen">
      <Header name="Office" />
      <NavBtns />
      {/* <Questions /> */}
      <Footer />
    </div>
  );
}

export default App;
