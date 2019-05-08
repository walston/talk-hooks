import React from "react";
import "./App.css";
import { Provider } from "./store";

const App: React.FC = () => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <div>User</div>
        </header>
      </div>
    </Provider>
  );
};

export default App;
