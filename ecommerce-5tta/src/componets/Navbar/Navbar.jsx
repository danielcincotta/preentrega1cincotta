import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-primary bg-gradient ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><Logo /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ofertas</a>
        </li>
      </ul>
        <CartWidget /> 
    </div>
  </div>
</nav>
  )
}

export default Navbar