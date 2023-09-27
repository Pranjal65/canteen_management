import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login";

//import Navbar from "../components/Navbar";

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <div>
        
      <h1>Login Page</h1>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;
