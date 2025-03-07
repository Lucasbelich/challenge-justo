import { Route, Routes } from "react-router-dom";
import OrdersPage from "./Pages/Orders/Orders";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OrdersPage />} />

      </Routes>
    </>
  );
}

export default App;
