import React from "react";

export function Header(props) {
  let bg = require("./img/triviaNight.png");

  return (
    <div class="static bg- w-full px-2">
      <div
        class="container mx-auto rounded  bg-cover bg-top pt-64"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <h1 class="text-left text-white mb-16 text-6xl font-bold p-8">
          Office Trivia quizz!
        </h1>
      </div>
    </div>
  );
}
