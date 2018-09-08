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

class TextFields extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.objectOf(PropTypes.string)
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.data.text
    };
  }

  handleChange = (e, inputOnChange) => {
    this.setState(
      {
        text: e.target.value
      },
      () => inputOnChange(this.props.data.id, this.state.text)
    );
  };

  render() {
    const { classes } = this.props;
    const { text } = this.state;

    return (
      <InputContext.Consumer>
        {actions => (
          <TextField
            label="Enter some text"
            className={classes.textField}
            value={text}
            onChange={e => this.handleChange(e, actions.inputOnChange)}
            margin="normal"
          />
        )}
      </InputContext.Consumer>
    );
  }
}

export default withStyles(styles)(TextFields);
