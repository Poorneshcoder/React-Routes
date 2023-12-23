import { createStore } from "redux";
import reducers from "./ReduxReducer";



export const store = createStore(
    reducers,
    {}
)