import type React from "react";
import { Route, Routes } from "react-router-dom";
import Clients from "./pages/clients";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Clients />} />
      </Routes>
    </>
  );
};

export default App;
