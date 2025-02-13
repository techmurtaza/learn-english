import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Words from "./Words";  // Import your Words component
import Questions from "./Questions";  // Import your Questions component
import Header from "./Header";

function App() {
  return (
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/words" element={<Words />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
