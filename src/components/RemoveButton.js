import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeInput } from '../modules/inputs';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const RemoveButton = props => {
  const { classes, removeInput, id } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={() => {
        removeInput(id);
      }}
    >
      Delete
      <DeleteIcon className={classes.rightIcon} />
    </Button>
  );
};

RemoveButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  removeInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { removeInput }
  )
)(RemoveButton);
