import React from "react";
import { Header } from "./Header.js";
import { NavBtns } from "./NavBtns.js";
import { APIcall } from "./APIcall.js";
import { Footer } from "./Footer.js";

function App() {
  return (
    <div class="bg-gray-400">
      <Header name="Office" />
      <NavBtns />
      <APIcall />
      <Footer />
    </div>
  );
}

export default App;
