import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import LandingPage from './components/Credentials/LandingPage';
import Login from './components/Credentials/Login';
import Signup from './components/Credentials/Signup';
import Dashboard from './components/Credentials/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
