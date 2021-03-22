import React, { useRef } from "react";

function Signup() {
  const usernameRef = React.useRef();
  const fnameRef = React.useRef();
  const lnameRef = React.useRef();
  const emailRef = React.useRef();

  return (
    <section>
      <h2>Sign Up:</h2>
      <form id="add-user" action='http://localhost:9000/addUser' method="POST">
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username"
            name="username"
           
            ref={usernameRef}
          />
        </fieldset>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text"
            id="fname"
            name="fname"
           
            ref={fnameRef}
            />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text"
            id="lname"
            name="lname"
            
            ref={lnameRef}/>
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="text"
            id="email"
            name="email"
            
            ref={emailRef}/>
        </fieldset>
        <input type="submit" value="Register" />
      </form>
    </section>
  );
}
export default Signup;