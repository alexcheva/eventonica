{/* NAVIGATION */}
function Nav() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="E.png" width="30" height="30" class="d-inline-block align-top" alt="logo image"/>
        Eventonica
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Sign Up <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        
        </ul>
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

export default Header;