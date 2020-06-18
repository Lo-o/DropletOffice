import React, { Component } from "react";

export class NavBtns extends Component {
  moveToQuestions = (e) => {
    e.preventDefault();
    console.log("Clicked to questions");
    console.log(this.props);
    this.props.nextStep();
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="text-center px-3 lg:px-0">
          <h1
            className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
          >
            Group play available at a time TDB
          </h1>
          <p
            className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
          >
            Just test your knowledge for now
          </p>

          <button
            className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64"
            onClick={this.moveToQuestions}
          >
            Single person quiz
          </button>

          {/* <button className="inline-block mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 shadow-lg w-64">
          Group quiz
        </button> */}

          {/* <a
          href="#"
          className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
        >
          Group Quiz
        </a> */}
        </div>
      </div>
    );
  }
}

export default NavBtns;
