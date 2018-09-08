import { connect } from 'react-redux';

import Result from '../components/Result';

const mapStateToProps = state => ({
  inputs: state.inputs
});

export default connect(mapStateToProps)(Result);
