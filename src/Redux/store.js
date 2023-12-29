import { applyMiddleware, createStore } from "redux";
import reducers from "./ReduxReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";



export const store = createStore(
    reducers,
    {},
    
    composeWithDevTools(applyMiddleware(thunk))
)