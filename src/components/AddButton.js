import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import InputContext from '../containers/input-context';

const styles = theme => ({
  button: {
    margin: '0 auto'
  }
});

const ContainedButtons = props => {
  const { classes } = props;
  return (
    <div className="row">
      <InputContext.Consumer>
        {addInput => (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addInput}
          >
            ADD INPUT
          </Button>
        )}
      </InputContext.Consumer>
    </div>
  );
};

ContainedButtons.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(ContainedButtons);
