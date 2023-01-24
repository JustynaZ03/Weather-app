import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./views/navbar";
import { Home } from "./views/home";
import { Paths } from "./types/router";

import "./styles/index.scss";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={Paths.NAVBAR} element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRouter />);
