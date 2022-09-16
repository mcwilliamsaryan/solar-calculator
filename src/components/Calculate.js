import React, { Component } from 'react';
import OwnPool from './OwnPool';
import SquareFeet from './SquareFeet';
import AcSystems from './AcSystems';
import AvgElecBill from './AvgElecBill';
import Estimate from './Estimate';
import ThankYou from './ThankYou';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
// import { Switch } from '@material-ui/core';

export default class Calculate extends Component {
  state = {
    step: 1,
    squareFeet: 0,
    avgElecBill: 0,
    ownPool: '',
    acSystems: '',
    estimate: 0,
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  ownsPool = (e) => {
    let stateCopy = this.state;
    let name = e.target.name;
    let buttonClicked = e.target.id;
    stateCopy[name] = buttonClicked;
    this.setState(stateCopy)
  }

  // "input" is the argument, a string, that gets passed into the handleChange method that we're passing to the 
  // child component via props. It's a string that references a variable in state like "squareFeet". This lets
  // update just that key value pair in state. This lets us update state in the parent component from within the child component. 
  handleChange = (input) => (e) => {

    let stateCopy = this.state;
    let name = e.target.name;
    let value = e.target.value;
    stateCopy[name] = value;

    stateCopy["estimate"] = parseFloat(stateCopy["squareFeet"]) + parseFloat(stateCopy["avgElecBill"])
    this.setState(stateCopy);
  };

  render() {
    const { value } = this.state;
    const values = { value };

    switch (this.state.step) {
      case 1:
        return (
          <SquareFeet
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state.squareFeet}
          />
        );
      case 2:
        return (
          <AvgElecBill
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OwnPool
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClick={this.ownsPool}
            values={values}
          />
        );
      case 4:
        return (
          <AcSystems
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Estimate
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
            estimate={this.state.estimate}
          />
        );
      case 6:
        return <ThankYou values={values} />;
      default:
    }
  }
}
