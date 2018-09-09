import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import RemoveButton from './RemoveButton';

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
    const { onChange, removeInput } = this.props;
    const { inputs } = this.state;
    return (
      <Fragment>
        {inputs.map(input => (
          <div className="row" key={input.id}>
            <Input data={input} onChange={onChange} />
            <RemoveButton id={input.id} removeInput={removeInput} />
          </div>
        ))}
      </Fragment>
    );
  }
}

export default Inputs;
