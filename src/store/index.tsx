import React from "react";
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

const store = createStore(
  reducer,
  applyMiddleware(() => {
    return next => action => {
      console.debug("dispatching", action);
      return next(action);
    };
  })
);
const Context = React.createContext(store);

const Provider = (props: any) => <Context.Provider {...props} value={store} />;
const Consumer = Context.Consumer;

export { Context, Consumer, Provider, store };
