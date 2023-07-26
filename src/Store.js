import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { bookListReducer} from "./Reducers/bookReduser";

const reducers = combineReducers({
  bookReducer: bookListReducer,
  
});

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
