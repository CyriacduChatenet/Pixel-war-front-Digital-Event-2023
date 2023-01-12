import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { createUser } from "../../setup/utils/useApi";

const Register = () => {
  const [error, setError] = useState("");
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const team = e.target.teams.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target["password-confirm"].value;
    if (password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    const data = {
      username: username,
      password: password,
      email: email
    }
    createUser(data)
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

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/team")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeams(data);
      });
  }, []);

  return (
    <>
      <h1>Register</h1>
      {error !== "" && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="teams">Equipe</label>
        <select name="teams" id="teams">
          <option value="" style={{ display: "none" }}>
            Choisir une équipe
          </option>
          {teams.map((team) => {
            return (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" required />
        <label htmlFor="password-confirm">Confirmer le mot de passe</label>
        <input
          type="password"
          name="password-confirm"
          id="password-confirm"
          required
        />
        <button type="submit">Inscription</button>
      </form>
    </>
  );
};
export default Register;
