import { connect } from 'react-redux';
import { createNewUser, login, clearErrors } from '../../actions/session';
import Signup from './signup';

const masStateToProps = state => ({
    errors: state.errors,
});
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(masStateToProps, mapDispatchToProps)(Signup);
