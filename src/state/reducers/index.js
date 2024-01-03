import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import todosReducer from "./todoReducer";


const reducers = combineReducers({
    amount:amountReducer,
    todos:todosReducer,
});

export default reducers;