import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import RemoveButton from './RemoveButton';

const InputGroup = props => {
  const { data } = props;
  return (
    <div className="row">
      <Input data={data} />
      <RemoveButton id={data.id} />
    </div>
  );
};

InputGroup.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default InputGroup;
