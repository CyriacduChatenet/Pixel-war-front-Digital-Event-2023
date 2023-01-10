import { login } from "../../setup/services/auth.service";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(e.target.username.value);
      console.log(e.target.password.value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default Login;
