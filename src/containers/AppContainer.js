import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getInitialResult, addInput } from '../modules/inputs';
import AddButton from '../components/AddButton';
import Inputs from '../components/Inputs';
import ResultContainer from './ResultContainer';
import InputContext from './input-context';

class AppContainer extends Component {
  componentDidMount() {
    const { getInitialResult } = this.props;
    getInitialResult();
  }

  render() {
    const { addInput } = this.props;
    return (
      <div className="container">
        <ResultContainer />
        <Inputs />
        <InputContext.Provider value={() => addInput('')}>
          <AddButton />
        </InputContext.Provider>
      </div>
    );
  }
}

AppContainer.propTypes = {
  getInitialResult: PropTypes.func.isRequired,
  addInput: PropTypes.func.isRequired
};

export default connect(
  null,
  { getInitialResult, addInput }
)(AppContainer);
