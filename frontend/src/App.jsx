import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/Landing/LandingPage';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<LandingPage />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;