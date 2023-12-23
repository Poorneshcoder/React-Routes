import { combineReducers } from "redux";
import inventoryReducers from "./inventoryReducer";


//reduc combined reducers

const reducers = combineReducers({
    inventory : inventoryReducers,
});

export default reducers;