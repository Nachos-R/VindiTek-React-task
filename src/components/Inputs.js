import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';

class Inputs extends Component {
  static propTypes = {
    inputs: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
  };

  state = {
    inputs: []
  };

  static getDerivedStateFromProps(nextProps) {
    return { inputs: nextProps.inputs };
  }

  render() {
    const { inputs } = this.state;
    return (
      <Fragment>
        {inputs.map(input => (
          <InputGroup key={input.id} data={input} />
        ))}
      </Fragment>
    );
  }
}

export default Inputs;
