import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/ApiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login_container">
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={handleClick}>Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};
export default Login;
