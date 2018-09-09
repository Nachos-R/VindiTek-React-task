import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import InputContext from '../containers/input-context';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const RemoveButton = props => {
  const { classes, id } = props;

  return (
    <InputContext.Consumer>
      {actions => (
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => actions.removeInput(id)}
        >
          Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      )}
    </InputContext.Consumer>
  );
};

RemoveButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired
};

export default withStyles(styles)(RemoveButton);
