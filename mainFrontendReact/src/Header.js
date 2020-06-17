import React from "react";

export function Header(props) {
  let bg = require("./img/triviaNight.png");

  return (
    <div className="static bg- w-full px-2">
      <div
        className="container mx-auto rounded  bg-cover bg-top pt-64 h-auto"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <h1 className="text-left text-white mb-16 text-6xl font-bold p-8">
          Office Trivia quiz!
        </h1>
      </div>
    </div>
  );
}
