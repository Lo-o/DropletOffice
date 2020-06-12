import React from "react";
import { Header } from "./Header.js";
import { NavBtns } from "./NavBtns.js";
import { Footer } from "./Footer.js";
import { CodingBox } from "./CodingBox.js";

function App() {
  return (
    <div class="bg-gray-400">
      <Header name="Luc" />
      <NavBtns />
      <Footer />
    </div>
  );
}

export default App;
