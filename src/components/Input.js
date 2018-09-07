import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { inputOnChange } from '../modules/inputs';

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

class TextFields extends React.Component {
  handleChange = event => {
    this.props.inputOnChange(this.props.data.id, event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
        label="Enter some text"
        className={classes.textField}
        value={this.props.data.text}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { inputOnChange }
  )
)(TextFields);
