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
    let mainField;
    console.log(step);

    if (step == 1) {
      mainField = <NavBtns
        nextStep={this.nextStep}
      />;
    } else {
      mainField = <Question />;
    }

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
