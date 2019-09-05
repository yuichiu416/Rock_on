import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import Login from './login';


const masStateToProps = state => ({
    errors: state.errors,
});
const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(masStateToProps, mapDispatchToProps)(Login);
