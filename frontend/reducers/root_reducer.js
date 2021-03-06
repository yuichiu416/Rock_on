import { combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorReducer from './session_error_reducer';
import entitiesReducer from './entities_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: sessionErrorReducer
});