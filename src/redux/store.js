import reduxThunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

import reducers from "./reducers/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    storeEnhancers(applyMiddleware(reduxThunk))
  );
  
  export default store;