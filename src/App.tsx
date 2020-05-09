import React from "react";
import Routes from "./Routes";
import {ProvideAuthContext} from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <ProvideAuthContext>
      <Routes />
    </ProvideAuthContext>
  );
};

export default App;
