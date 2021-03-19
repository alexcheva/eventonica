import React, { useState, useRef, useEffect } from "react";

function Signup() {
  const [username, setUsername] = React.useState(null);
  const [fname, setFname] = React.useState(null);
  const [lname, setLname] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  {/* how to make this work? */ }
  const onChange = ({ currentTarget: { value } }) => {
    setUsername(value);
    setFname(value);
    setLname(value);
    setEmail(value);
  };
  
  const usernameRef = React.useRef();
  const fnameRef = React.useRef();
  const lnameRef = React.useRef();
  const emailRef = React.useRef();

  const handleSubmit = event => {
    event.preventDefault();
    console.log('USER FORM:', "Username:", usernameRef.current.value, ", First Name:", fnameRef.current.value, ", Last Name:", lnameRef.current.value, ", email:", emailRef.current.value)
  }
  return (
    <section>
      <h2>Sign Up:</h2>
      <form id="add-user" onSubmit={handleSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username"
            name="username"
            value={username} 
            ref={usernameRef}
          />
        </fieldset>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text"
            id="fname"
            name="fname"
            value={fname}
            ref={fnameRef}
            />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text"
            id="lname"
            name="lname"
            value={lname}
            ref={lnameRef}/>
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="text"
            id="email"
            name="email"
            value={email}
            ref={emailRef}/>
        </fieldset>
        <input type="submit" value="Register" />
      </form>
      {/*<ShowUser username={username} fname={fname} lname={lname} email={email}  />*/}
    </section>
  );
}
export default Signup;