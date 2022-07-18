import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootReducer } from "./root-reducer";
import logger from "redux-logger";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleWare=createSagaMiddleware()

  const middleWares = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleWare].filter(Boolean);
  
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
  };
  
 

  const persistedReducer = persistReducer(persistConfig, RootReducer);
  
  const composedEnhancers = compose(applyMiddleware(...middleWares));
  
  export const Store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
  );
  
sagaMiddleWare.run(rootSaga)

  export const persistor = persistStore(Store);