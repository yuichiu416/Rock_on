import { connect } from 'react-redux';
import { createNewUser, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const masStateToProps = state => ({
    errors: state.errors,
    formType: "Sign Up",
});
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(masStateToProps, mapDispatchToProps)(SessionForm);
