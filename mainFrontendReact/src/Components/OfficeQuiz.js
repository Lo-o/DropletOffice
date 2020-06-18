import React, { Component } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import NavBtns from "./NavBtns";
import { Question } from "./Question";

export class OfficeQuiz extends Component {
  state = {
    step: 1,
    finishedQuestions: [0],
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  render() {
    const { step } = this.state;
    const { finishedQuestions } = this.state;

    let mainField;

    console.log(step);

    if (step == 1) {
      mainField = <NavBtns
        nextStep={this.nextStep}
        finishedQuestions={finishedQuestions}
      />;
    } else {
      mainField = <Question finishedQuestions={finishedQuestions} />;
    }

    // switch (step) {
    //   case 1:
    //     mainField = <h1>Foo</h1>;
    //   case 2:
    //     mainField = <h1>Bar</h1>;
    //   case 3:
    //     mainField = <h1>baz</h1>;
    // }

    return (
      <div>
        <Header />

        {mainField}

        <Footer />
      </div>
    );
  }
}

export default OfficeQuiz;
