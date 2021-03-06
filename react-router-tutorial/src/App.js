import React from "react";
import { Route } from "react-router-dom";
import { Home, About } from "pages";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
