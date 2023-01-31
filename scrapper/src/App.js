import React, { Fragment } from "react";
import Table from "./Table";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/result" element={<Table />}></Route>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
