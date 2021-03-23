{/* NAVIGATION */}
function Nav() {
  return (
    <nav class="navbar sticky-top navbar-light bg-light d-flex">
      <div class="container">
        <a class="navbar-brand" href="#">
        <img id="eventonica-logo" src="E.png" class="d-inline-block align-top" alt="logo image"/>
          <h1 id="eventonica">Eventonica</h1>
        </a>
        <div class="d-flex">
          <ul class="navbar-nav mr-auto justify-content-end flex-row ">
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login  </a>
            </li>
          </ul>
        </div>
      </div>
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

export default Nav;