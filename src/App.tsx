import React from "react";
import "./App.css";
import { Provider } from "./store";

import { AppHeader } from "./AppHeader";
import { AppBody } from "./AppBody";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <main className="App-body">
          <AppBody />
        </main>
      </div>
    </Provider>
  );
};

export default App;
