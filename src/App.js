//import logo from './logo.svg';
//import headerImg from './header_img.jpeg'
//import './App.css';
import * as React from "react";

import Login from './components/Login';
import Signup from './components/Signup';
import AddEvent from './components/AddEvent';

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

function Events() {

  const [events, setEvents] = React.useState([]);

  function getEvents() {
    fetch('http://localhost:9000/events').then(
      res => res.json()
    ).then(
      data => setEvents(data)
    )
  }
  console.log(events);
  React.useEffect(
    () => {
      getEvents();
    },[]
  )
  //New Date(blahhhh).toDateString() //"Sun Jul 22 2018"
  return (
    <section>
      <h2>Events</h2>
      <ul id="all-events">
        {events.map((event) =>
          <li key={event.id}>
            <strong>{event.name}</strong> - {event.category} - <em>{event.location}</em> - {new Date(event.date).toDateString()}, {event.time}, price:  ${event.price}.
          </li>)
        }
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Login />
      <Signup />
      <main>
        <Events />
        <AddEvent />
      </main>
    </div>
  );
}

export default App;
