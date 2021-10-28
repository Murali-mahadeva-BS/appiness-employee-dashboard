import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const middlewaresEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const storeEnhancer = [middlewaresEnhancer];
  const composedEnhancer = compose(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  return store;
}
