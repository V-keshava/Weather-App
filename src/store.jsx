import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducer";

const store = legacy_createStore(weatherReducer, applyMiddleware(thunk));

export default store;
