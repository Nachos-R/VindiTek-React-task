import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    margin: '0 auto'
  }
});

const ContainedButtons = ({ classes, addInput }) => (
  <div className="row">
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={addInput}
    >
      ADD INPUT
    </Button>
  </div>
);

ContainedButtons.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  addInput: PropTypes.func.isRequired
};

export default withStyles(styles)(ContainedButtons);
