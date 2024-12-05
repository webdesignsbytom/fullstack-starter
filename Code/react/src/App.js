import { Routes, Route, Navigate } from 'react-router-dom';
// Components
import RegistrationPage from './users/register/Register';
import LoginPage from './users/login/Login';
import RacePage from './pages/race/RacePage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />

      <Route path="/" index element={<RacePage />} />
    </Routes>
  );
}

function isLoggedIn() {
  const loadedToken = localStorage.getItem('token');
  return !(loadedToken === '');
}

export default App;

const AuthenticateUser = ({ children, redirectPath = '/' }) => {
  if (!isLoggedIn()) {
    return <Navigate to={redirectPath} replace />;
  }

  return { children };
};
