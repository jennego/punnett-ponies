import React from "react";
import IndexPage from "../pages/main";
import Playground from "../pages/playground";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

const Routes = ({ children }) => (
  <BrowserRouter>
    {children}
    <Router>
      <Route path="/" element={<IndexPage />} />
      <Route path="/playground" element={<Playground />} />
    </Router>
  </BrowserRouter>
);

export default Routes;
