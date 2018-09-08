import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Result(props) {
  const { classes, inputs } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {inputs.map(item => item.text).join(' - ')}
        </Typography>
      </Paper>
    </div>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.instanceOf(Object))
};

export default withStyles(styles)(Result);
