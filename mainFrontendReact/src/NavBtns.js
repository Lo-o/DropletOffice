import React from "react";

export function NavBtns(props) {
  return (
    <div class="container mx-auto">
      <div class="text-center px-3 lg:px-0">
        <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Group play available
        </h1>
        <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
          Test your knowledge, or add some competition
        </p>

        <button class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64">
          Single's people quiz
        </button>
        <button class="inline-block mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64">
          Group quiz
        </button>

        {/* <a
          href="#"
          class="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
        >
          Group Quiz
        </a> */}
      </div>
    </div>
  );
}
