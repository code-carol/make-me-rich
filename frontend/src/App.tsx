import { Routes, Route } from "react-router-dom";

import "./App.css";

import * as Pages from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="/login" element={<Pages.Login />}></Route>
      <Route path="/register" element={<Pages.Register />}></Route>
      <Route path="/profile" element={<Pages.Profile />}></Route>
      <Route path="/goals" element={<Pages.Goals />}></Route>
      <Route path="/dashboard" element={<Pages.Dashboard />}></Route>
      <Route path="/insights" element={<Pages.Insights />}></Route>
      <Route path="*" element={<Pages.NotFound />}></Route>
    </Routes>
  );
};

export default App;
