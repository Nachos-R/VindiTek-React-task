import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getInitialResult,
  addInput,
  inputOnChange,
  removeInput
} from '../modules/inputs';
import AddButton from '../components/AddButton';
import Inputs from '../components/Inputs';
import ResultContainer from './ResultContainer';
import InputContext from './input-context';

class AppContainer extends Component {
  static propTypes = {
    getInitialResult: PropTypes.func.isRequired,
    addInput: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getInitialResult } = this.props;
    getInitialResult();
  }

  render() {
    const { addInput, inputOnChange, removeInput, inputs } = this.props;
    const actions = { inputOnChange, removeInput };
    return (
      <div className="container">
        <ResultContainer />
        <InputContext.Provider value={actions}>
          <Inputs inputs={inputs} />
        </InputContext.Provider>
        <InputContext.Provider value={() => addInput('')}>
          <AddButton />
        </InputContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputs: state.inputs
});

export default connect(
  mapStateToProps,
  { getInitialResult, addInput, inputOnChange, removeInput }
)(AppContainer);
