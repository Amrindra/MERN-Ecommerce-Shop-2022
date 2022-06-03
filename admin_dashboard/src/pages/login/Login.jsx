import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login_container">
      <input
        type="text"
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={handleClick}>Login</button>
    </div>
  );
};
export default Login;
