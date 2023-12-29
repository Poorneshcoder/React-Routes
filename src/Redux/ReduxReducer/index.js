import { combineReducers } from "redux";
import inventoryReducers from "./inventoryReducer";
import userListReducer from "./userListReducer";


//reduc combined reducers

const reducers = combineReducers({
    inventory : inventoryReducers,
    users : userListReducer,
});

export default reducers;