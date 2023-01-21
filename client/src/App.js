
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './users/register/Register';
import LoginPage from './users/login/Login';
import Form from './components/forms/forms2/Form';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forms" element={<Form />} />
        </Routes>
      </main>
    </div>
    );
  }
  
  {/* <Route element={<AuthenticateUser />}> */}
function isLoggedIn() {
  const loadedToken = localStorage.getItem('token');
  return !(loadedToken === '');
}

export default App;

// const AuthenticateUser = ({ children, redirectPath = '/' }) => {
//   if (!isLoggedIn()) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <Login />;
// };