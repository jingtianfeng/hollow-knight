import icon from "./img/icon/white-32.png";

function NavTop() {
    return (
        <nav id="navbar"
             className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            <div id="navbar__container" className="container">
                <button id="navbar__container__toggler"
                        className="navbar-toggler fs-6 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar__container__menu"
                        aria-controls="navbar__container__menu"
                        aria-expanded="false"
                        aria-label="toggle navigation">
                    MENU
                </button>
                <img src={icon} alt="icon"
                     id="navbar__container__icon"
                     className="navbar-brand me-0"/>
                <div id="navbar__container__cart"
                     className="navbar-text btn position-relative order-lg-last"
                     data-bs-toggle="offcanvas" data-bs-target="#cart"
                     aria-controls="cart">
                    CART
                    <span className="badge rounded-pill text-body
                                         position-absolute top-0 start-100 translate-middle-x">
                            1
                            <span className="visually-hidden">number of items in shopping cart</span>
                        </span>
                </div>
                <div id="navbar__container__menu"
                     className="collapse navbar-collapse justify-content-lg-center">
                    <ul id="navbar__container__menu__nav"
                        className="navbar-nav navbar-nav-scroll m-lg-0">
                        <li className="nav-item">
                            <a href="#top" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#section-book" className="nav-link">Books</a>
                        </li>
                        <li className="nav-item">
                            <a href="#section-coming" className="nav-link">Coming Soon</a>
                        </li>
                        <li className="nav-item">
                            <a href="#footer" className="nav-link">Newsletter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavTop
