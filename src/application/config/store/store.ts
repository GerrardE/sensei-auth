import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import saga from "@domain/redux/saga";
import index from "@domain/redux";

const logger: any = createLogger({
  collapsed: true,
  diff: true,
});

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "none",
  storage,
  whitelist: ["none"],
};
 
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const persistedReducer = persistReducer(persistConfig, index(history));

const initialState = {};

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(saga);

export { store, persistor };
