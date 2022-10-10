import { createStore, combineReducers } from "redux";

import StudentsListReducer from "./Reducers/StudentsListReducer";

const rootReducer = combineReducers({
  StudentsState: StudentsListReducer,
});

const store = createStore(rootReducer);

export default store;
