import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputContext from '../containers/input-context';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 'auto'
  }
});

const Input = ({ classes, data }) => (
  <InputContext.Consumer>
    {actions => (
      <TextField
        label="Enter some text"
        className={classes.textField}
        value={data.text}
        onChange={e => actions.inputOnChange(data.id, e.target.value)}
        margin="normal"
      />
    )}
  </InputContext.Consumer>
);

TextField.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(Input);
