import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("http://localhost:9000/user/2");
        let user = await res.json();
        setUsername(user.username);
        setEmail(user.email);
      } catch (e) {
        //TODO: handle error
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Please sign in:</h2>
      <form>
        <fieldset>
          <label>username: </label>
          <input
            value={username}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <label>email: </label>
          <input
            value={email}
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          ></input>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
