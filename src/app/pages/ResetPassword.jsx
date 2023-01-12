import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../../setup/utils/useApi";

const ResetPassword = () => {
  const [credentials, setCredentials] = useState("");

  const handleChange = (e) => {
    setCredentials(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(credentials);
  };
  return (
    <div className="l-reset">
      <h1>Tu as oublié ton mot de passe ?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Adresse mail"
          onInput={handleChange}
        />
        <button type="submit">Envoyer la demande</button>
      </form>
      <Link className="l-login__forgot" to="/connexion">
        Annuler
      </Link>
    </div>
  );
};

export default ResetPassword;
