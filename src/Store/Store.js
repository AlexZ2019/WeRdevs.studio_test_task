import {combineReducers, createStore} from "redux";
import CalendarReducer from "./Reducers/CalendarReducer";

const reducers = combineReducers({
    CalendarReducer
})

const store = createStore(reducers);

export default store;