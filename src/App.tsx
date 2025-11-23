import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {MonthStatistics} from "./pages/MonthStatictics/components/MonthStatistics";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statictics" element={<MonthStatistics />}/>
        </Routes>
      </div>
  );
}

export default App;
