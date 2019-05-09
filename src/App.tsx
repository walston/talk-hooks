import React from "react";
import "./App.css";
import { Provider } from "./store";

import { AppHeader } from "./AppHeader";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
      </div>
    </Provider>
  );
};

export default App;
