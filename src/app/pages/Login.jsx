import { login } from "../../setup/services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };

    try {
      const response = await login(data);
      console.log(response);
      if (response) {
        navigate("/");
      }
    } catch (e) {
      setError(true);
    }
  };

  // const handleResetPassword = () => {
  //   navigate("/reset");
  // };

  return (
    <div className="l-login">
      <h1>
        Connecte-toi et rejoins la
        <br /> bataille !
      </h1>
      {error && (
        <p className="l-login__error">Les informations ne sont pas correctes</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Nom d'utilisateur"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
      <Link to="/reset" className="l-login__forgot">
        Mot de passe oubliée
      </Link>
      <p className="l-login__register">
        Pas de compte ? <Link to="/inscription">Inscris-toi</Link>
      </p>
    </div>
  );
};

export default Login;
