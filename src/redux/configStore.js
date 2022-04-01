import { combineReducers, createStore } from "redux";
import { BaiTapOanTuTiReducer } from "./reducer/BaiTapOanTuTiReducer";

const rootReducer = combineReducers({
  BaiTapOanTuTiReducer: BaiTapOanTuTiReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
