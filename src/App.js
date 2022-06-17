import React from "react";
import Header from "./component/Header/Header.jsx";
import ProfileDetail from "./component/ProfileDetail/ProfileDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductMandiReport from "./component/ProductMandiReport/ProductMandiReport.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProfileDetail />} />
          <Route path='/report/:sortOrder' element={<ProductMandiReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
