import React, { Component } from 'react';
import UserDetails from './UserDetails';
import OwnPool from './OwnPool';
import SquareFeet from './SquareFeet';
import AcSystems from './AcSystems';
import AvgElecBill from './AvgElecBill';
import Estimate from './Estimate';

export default class Calculate extends Component {
  state = {
    step: 1,
    squareFeet: '',
    avgElecBill: '',
    ownPool: '',
    acSystems: '',
    estimate: '',
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { value } = this.state;
    const values = { value };

    switch (step) {
      case 1:
        return (
          <SquareFeet
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
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
          />
        );
      default:
      // do nothing
    }
  }
}
