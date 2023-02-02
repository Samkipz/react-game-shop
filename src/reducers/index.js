import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import games from './games'

export default combineReducers({
    auth,
    message,
    games,
});