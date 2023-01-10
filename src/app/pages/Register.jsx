import { register } from "../../setup/services/auth.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(e.target.username.value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="email" name="email" />
        <select name="teams">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <input type="password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default Register;
