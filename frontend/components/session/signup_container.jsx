import { connect }from 'react-redux';
import Signup from './signup';
import { createNewUser } from '../../actions/session';

const mapDispatchToPtops = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToPtops)(Signup);