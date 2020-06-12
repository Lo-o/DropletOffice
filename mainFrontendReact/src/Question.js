import React from "react";
import { APIcall } from "./APIcall.js";

export function Question(props) {
  let questions = APIcall();
  let question = questions[0];
  //   let x = question["question"];

  console.log(question);

  return (
    <div class="container mx-auto flex-grow">
      <button class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64">
        Single's people quiz
      </button>
      <button class="inline-block mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64">
        Group quiz
      </button>
    </div>
  );
}
