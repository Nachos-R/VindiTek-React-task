import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputGroup from './InputGroup';

const Inputs = props => {
  const { inputs } = props;
  return (
    <Fragment>
      {inputs.map(input => (
        <InputGroup key={input.id} data={input} />
      ))}
    </Fragment>
  );
};

Inputs.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};

const mapStateToProps = state => ({
  inputs: state.inputs
});

export default connect(mapStateToProps)(Inputs);
