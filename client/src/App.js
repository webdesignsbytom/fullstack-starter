import './styles/app.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './users/registration/RegistrationPage';
import LoginPage from './users/login/LoginPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route element={<AuthenticateUser />}>
            <Route path='/welcome' element={<WelcomePage />} />

          </Route>
        </Routes>
      </main>
    </div>
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

  return <WelcomePage />;
};