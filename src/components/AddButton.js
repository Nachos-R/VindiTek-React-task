import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { addInput } from '../modules/inputs';

const styles = theme => ({
  button: {
    margin: '0 auto'
  }
});

const ContainedButtons = props => {
  const { classes, addInput } = props;
  return (
    <div className="row">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          addInput('');
        }}
      >
        ADD INPUT
      </Button>
    </div>
  );
};

ContainedButtons.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  addInput: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { addInput }
  )
)(ContainedButtons);
