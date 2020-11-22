import { applyMiddleware, combineReducers, createStore} from 'redux';
import {cartReducer} from './cart-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    cart: cartReducer,
    form: reduxFormReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));