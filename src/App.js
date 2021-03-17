//import logo from './logo.svg';
//import headerImg from './header_img.jpeg'
//import './App.css';
import * as React from "react";
{/* NAVIGATION */}
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}
{/* HEADER */}
function Header() {
  return (
    <header className="App-header">
      {/* <img src={headerImg} className="jumbotron" alt="header-img" /> */}
      <h1>
        Eventonica 
      </h1>
      <p>Event Recommender</p>
      <Nav></Nav>
    </header>
  );
}
function SayHello() {
  const [name, setName] = React.useState(null);
  const onChange = ({ currentTarget: { value } }) => setName(value);
  return (
    <section>
    <h2>Hello</h2>
        <label>What is your name?</label>
        <input type="text"
          name="name"
          value={name} 
          onChange={onChange}
        />
      {/*<input type="submit" value="Submit" onClick={onChange} /> */}
      {/* how to use if else statement? */}
        <GreetUser name={name} />
      </section>
  );
}
function GreetUser(props) {
  const { name } = props;
  return <h4>Welcome, {name}!</h4>
}

function Signup() {

  {/* Setup InitialState */ }
  const initialState = {
    username: "",
    fname: "",
    lname: "",
    email: ""
  }

  function reducer(state, action) {
    switch (action.type) {
      case "editUsername":
        return { ...state, username: action.value };
      
      case "editFname":
        return {...state, fname: action.value };
  
      case "editLname":
        return {...state, lname: action.value };
  
      case "editEmail":
        return { ...state, email: action.value };
      
      default:
        return state;
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);
 
  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <section>
      <h2>Sign Up:</h2>
      <form id="add-user" onSubmit={handleSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" id="add-username"
            name="username"
            value={state.username} 
            onChange={(e) => {
              dispatch({ type: "editUsername", value: e.target.value });
              }}
          />
        </fieldset>
        <fieldset>
          <label for="fname">First name:</label>
          <input type="text"
            id="fname"
            name="fname"
            value={state.fname}
            onChange={(e) => {
              dispatch({ type: "editFname", value: e.target.value });
              }}
            />
        </fieldset>
        <fieldset>
          <label for="lname">Last name:</label>
          <input type="text"
            id="lname"
            name="lname"
            value={state.lname}
            onChange={(e) => {
              dispatch({ type: "editLname", value: e.target.value });
              }}/>
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="text"
            id="email"
            name="email"
            value={state.email}
            onChange={(e) => {
              dispatch({ type: "editEmail", value: e.target.value });
              }}/>
        </fieldset>
        <input type="submit" value="Register" />
      </form>
    </section>
  );
}

{/* Events */}
function Events() {
  return (
    <section>
      <h2>Events</h2>
      <ul id="all-events">
        <li>HIM - concert - UCT - 05-12-2021 - 12:00 PM - 55</li>
        <li>POD - concert - UCT - 10-21-2021 - 18:00 PM - 55</li>
      </ul>
    </section>
  );
}
{/* ADD EVENT FORM */}
function AddEventForm() {
  const handleSubmit = event => {
    event.preventDefault();
    console.log('You have submitted the form.')
  }
  return (
    <section>
      <h2>Add Event</h2>
      <form id="add-event" onSubmit={handleSubmit} >
        <fieldset>
          <label>Name:</label>
          <input
            type="text" name="name"
            id="add-event-name"
            placeholder="Event Name"
          />
        </fieldset>
        <fieldset>
          <label for="event-category">Category:</label>
          <input
          type="text" name="category"
          id="event-category" 
          placeholder="Event Category"
          />
        </fieldset>
        <fieldset>
          <label for="event-location">Location:</label>
          <input
          type="text" name="location"
          id="event-location" 
          placeholder="Location"
          />
        </fieldset>
        <fieldset>
          <label for="event-date">Date:</label>
          <input
          type="text" name="date"
          id="event-date" 
          placeholder="MM-DD-YYYY"
          />
        </fieldset>
        <fieldset>
          <label for="event-time">Time:</label>
          <input
          type="text" name="time"
          id="event-time" 
          placeholder="HH-MM"
          />
        </fieldset>
        <fieldset>
          <label for="event-price">Price:</label>
          <input
          type="text" name="price"
          id="event-price" 
          placeholder="0.00"
          />
        </fieldset>
        <input type="submit" value="Add Event"/>
      </form>
    </section>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <SayHello />
      <Signup />
      <main>
        <Events />
        <AddEventForm />
      </main>
    </div>
  );
}

export default App;
