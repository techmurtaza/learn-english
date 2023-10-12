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

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-2">
            <ul className="flex justify-center space-x-4">
                <li className="text-white  p-3 rounded-md hover:bg-blue-400">
                    <Link to="/words" className="hover:text-gray-20 transition duration-300">Words</Link>
                </li>
                <li className="text-white p-3 rounded-md hover:bg-blue-400">
                    <Link to="/questions" className="hover:text-gray-200 transition duration-300">Questions</Link>
                </li>
            </ul>
        </nav>

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
