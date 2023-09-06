// import "./App.css";
import TodoApp from "./Todo/components/TodoApp";
import WeatherApp from "./Weather/WeatherApp";
import Navbar from "./components/Navbar";
import CartApp from "./shoppingCart/components/CartApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<TodoApp />} />
            <Route exact path="/shoppingCart" element={<CartApp />} />
            <Route exact path="/weatherApp" element={<WeatherApp />} />
            <Route exact path="/about" element={<TodoApp />} />
            <Route exact path="/contact" element={<TodoApp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
