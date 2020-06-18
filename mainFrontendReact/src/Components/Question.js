import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      question: null,
      finishedQuestions: [0],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://178.128.254.113:5566/api/v1/randomQuestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.finishedQuestions),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            question: result.data,
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
        },
      );
  }

  handleClick(chosenOption) {
    let finishedQuestions = this.state.finishedQuestions;
    const currentQuestionID = this.state.question["id"];
    finishedQuestions.push(currentQuestionID);

    console.log("Handled click");
    console.log(chosenOption);

    // this.setState({
    //   finishedQuestions: finishedQuestions,
    // });

    console.log(finishedQuestions);
    console.log(currentQuestionID);

    let element = document.getElementById(chosenOption);
    let originalBackgroundColor =
      ReactDOM.findDOMNode(element).style.backgroundColor;
    let feedbackColoring = (chosenOption === "correct_answer")
      ? "green"
      : "red";
    ReactDOM.findDOMNode(element).style.backgroundColor = feedbackColoring;

    console.log(finishedQuestions);

    setTimeout(() => {
      ReactDOM.findDOMNode(element).style.backgroundColor =
        originalBackgroundColor;
      this.componentDidMount();
    }, 1300);
  }

  render() {
    const { error, isLoaded, question } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(question);

      const answer = question["correct_answer"];
      let options = [];

      let questionKeys = Object.keys(question);
      questionKeys.forEach((key) =>
        key.includes("option")
          ? options.push(key)
          : console.log("excluded: " + key)
      );

      options.push("correct_answer");
      options = shuffleArray(options);

      console.log("options: " + options);

      let btn_class_normal =
        "mx-auto lg:mx-0 hover:underline hover:bg-blue-500 focus:outline-none text-gray-800 font-extrabold rounded py-3 my-2 shadow-lg w-64 ";

      return (
        <div className="text-center px-3 lg:px-0">
          <h1
            className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
          >
            {question.question}
          </h1>

          <div>
            {options.map((option) => (
              <p>
                <button
                  className={btn_class_normal}
                  id={option}
                  onClick={() => this.handleClick(option)}
                >
                  {question[option]}
                </button>
              </p>
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
