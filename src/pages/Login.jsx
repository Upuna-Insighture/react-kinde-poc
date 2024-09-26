import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import './Login.css'; // Import the CSS file

const Login = () => {
  const { login, register } = useKindeAuth();

  return (
    <div className="auth-container">
      <h1 className="auth-title">Welcome to the App</h1>
      <p className="auth-subtitle">Please log in or register to continue</p>
      <button
        onClick={register}
        type="button"
        className="auth-button"
      >
        Register
      </button>
      <button
        onClick={login}
        type="button"
        className="auth-button"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
