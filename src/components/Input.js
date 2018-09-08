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
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.data.text
    };
  }

  handleChange = e => {
    this.setState(
      {
        text: e.target.value
      },
      () => this.props.inputOnChange(this.props.data.id, this.state.text)
    );
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state;

    return (
      <TextField
        label="Enter some text"
        className={classes.textField}
        value={text}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.objectOf(PropTypes.string)
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { inputOnChange }
  )
)(TextFields);
