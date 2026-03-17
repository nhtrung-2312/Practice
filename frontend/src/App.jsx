import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/Landing/LandingPage';
import Login from './components/pages/Auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;