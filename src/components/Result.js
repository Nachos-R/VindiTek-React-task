import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import validateBeforeOnchange from '../utils/validation';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%'
  },
  text: {
    overflowWrap: 'break-word'
  }
});

const Result = ({ classes, inputs }) => (
  <div className="row">
    <Paper className={classes.root} elevation={1}>
      <Typography className={classes.text} variant="headline" component="h3">
        {inputs.filter(input => input.text !== '').length > 0
          ? inputs.map(item => validateBeforeOnchange(item.text)).join(' - ')
          : 'No text yet...'}
      </Typography>
    </Paper>
  </div>
);

Result.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};

export default withStyles(styles)(Result);
