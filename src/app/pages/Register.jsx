import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { createUser } from "../../setup/utils/useApi";

const Register = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    // const team = e.target.teams.value;
    const password = e.target.password.value;
    const data = {
      username: username,
      password: password,
      email: email,
    };
    createUser(data)
      .then(() => {
        setResult("Le compte a bien été créé");
        navigate("/");
      })
      .catch((e) => {
        if (e.stack.includes("email-already-in-use")) {
          setResult("L'email est déjà utilisé");
        } else {
          setResult("Une erreur est survenue");
        }
      });
    // const data = { username, password, email, team };
    // fetch(process.env.REACT_APP_API + "/auth/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch((e) => {
    //     setError("Une erreur est survenue");
    //     console.log(e);
    //   });
  };

  const renderResult = () => {
    if (result === "") return;
    if (result === "Le compte a bien été créé") {
      return <p className="l-login__success">{result}</p>;
    } else {
      return <p className="l-login__error">{result}</p>;
    }
  };

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_API + "/team")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTeams(data);
  //     });
  // }, []);

  return (
    <div className="l-register">
      <h1>
        Créé ton compte pour rejoindre la <br /> bataille !
      </h1>
      {renderResult()}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          minLength={6}
          required
        />
        <button type="submit">
          <div className="l-login__before"></div>
          S'inscrire
          <div className="l-login__after"></div>
        </button>
      </form>
      <p className="l-login__register">
        Déjà un compte ? <Link to="/connexion">Connecte-toi</Link>
      </p>
    </div>
  );
};
export default Register;
