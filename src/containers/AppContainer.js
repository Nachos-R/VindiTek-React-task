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

class AppContainer extends Component {
  static propTypes = {
    getInitialResult: PropTypes.func.isRequired,
    addInput: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getInitialResult } = this.props;
    getInitialResult();
  }

  onChange = (id, value) => {
    this.props.inputOnChange(id, value);
  };

  render() {
    const { addInput, removeInput, inputs } = this.props;
    return (
      <div className="container">
        <ResultContainer />
        <Inputs
          inputs={inputs}
          onChange={this.onChange}
          removeInput={removeInput}
        />
        <AddButton addInput={() => addInput('')} />
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
