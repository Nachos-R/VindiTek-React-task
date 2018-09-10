import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const RemoveButton = ({ classes, id, removeInput }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    onClick={() => removeInput(id)}
  >
    Delete
    <DeleteIcon className={classes.rightIcon} />
  </Button>
);

RemoveButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
  removeInput: PropTypes.func.isRequired
};

export default withStyles(styles)(RemoveButton);
