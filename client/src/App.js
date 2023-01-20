
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './users/registration/RegistrationPage';
import LoginPage from './users/login/LoginPage';
import Home from './pages/home/Home';
import Form from './components/forms/forms2/Form';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forms" element={<Form />} />

          <Route element={<AuthenticateUser />}>

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

  return <Home />;
};