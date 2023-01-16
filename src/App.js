import logo from './logo.svg';
import './App.css';
import Logo from "./components/Logo";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomepageUnlogged from './components/HomepageUnlogged';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageUnlogged  />}>
      
        </Route>
      </Routes>
  </Router>
  );
}

export default App;
