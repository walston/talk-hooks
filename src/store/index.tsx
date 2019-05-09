import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const store = createStore(
  reducer,
  applyMiddleware(thunk, () => {
    return next => action => {
      console.debug("dispatching", action);
      return next(action);
    };
  })
);
const context = React.createContext(store);

const Provider = (props: any) => <ReduxProvider {...props} store={store} />;
const Consumer = context.Consumer;

export { Provider, Consumer, store };
