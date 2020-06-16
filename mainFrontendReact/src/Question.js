import React, { Component } from "react";
import { getQuestion } from "./APIcall.js";

export class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://178.128.254.113:5566/api/v1/questions")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let question = items[0];
      const answer = question["correct_answer"];
      let options = [];

      let questionKeys = Object.keys(question);
      questionKeys.forEach((key) =>
        key.includes("option") ? options.push(key) : console.log("Hello")
      );

      options.push("correct_answer");
      options = shuffleArray(options);

      console.log(options);

      return (
        <div>
          <h1>{question.question}</h1>

          <div>
            {options.map((option) => (
              <p>{question[option]}</p>
            ))}
          </div>
        </div>
      );
    }
  }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export function RenderQuestion(props) {
  let question = Questions().render();

  return (
    <div class="container mx-auto">
      <div class="text-center px-3 lg:px-0">
        <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
          {question.id}
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
