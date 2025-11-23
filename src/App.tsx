import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {MonthStatistics} from "./pages/MonthStatictics/components/MonthStatistics";
import {Header} from "./shared/Header/Header";

function App() {
  return (
      <div className="container">
          <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statictics" element={<MonthStatistics />}/>
        </Routes>
      </div>
  );
}

export default App;
