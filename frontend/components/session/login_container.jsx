import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const masStateToProps = state => ({
    errors: state.errors,
    formType: "Log In",
});
const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(masStateToProps, mapDispatchToProps)(SessionForm);
