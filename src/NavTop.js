import Logo from './img/icon/white-64.png'
import CartIcon from "./CartIcon";

function NavTop() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <img src={Logo} alt="logo"
                     className="navbar-brand"/>
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar__container__menu"
                        aria-controls="navbar__container__menu"
                        aria-expanded="false"
                        aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div id="navbar__container__menu"
                     className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                    <CartIcon/>
                </div>
            </div>
        </nav>
    )
}

export default NavTop
