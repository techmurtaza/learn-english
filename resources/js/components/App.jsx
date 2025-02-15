import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Words from "./Words";  // Import your Words component
import Questions from "./Questions";  // Import your Questions component
import Header from "./module/Header";
import Footer from "./module/Footer";
import HomePage from "./HomePage";
import { NotFound } from "./module/NotFound";

function App() {
  return (
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/words" element={<Words />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;