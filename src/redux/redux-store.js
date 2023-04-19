import { legacy_createStore, combineReducers } from "redux";
import menuReducer from "./mainMenu-reducer";


let reducers = combineReducers({
    mainMenu: menuReducer,
});

let store = legacy_createStore(reducers);

window.__store__ = store;

export default store;