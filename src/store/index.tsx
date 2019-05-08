import React from "react";
import { createStore } from "redux";

import reducer from "./reducer";

const store = createStore(reducer);
const context = React.createContext(store);

const Provider = (props: any) => <context.Provider {...props} value={store} />;
const Consumer = context.Consumer;

export { Provider, Consumer, store };
