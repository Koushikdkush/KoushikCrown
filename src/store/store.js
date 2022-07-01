import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";

const middleware = [logger]
const ComposedEnhancers = compose(applyMiddleware(...middleware))
export const Store = createStore(RootReducer, undefined, ComposedEnhancers)