import logo from "./img/logo.png";

function Header() {
    return (
        <header id="header"
                className="border-bottom py-5">
            <div id="header__container" className="container">
                <img src={logo} alt="logo"
                     id="header__container__logo"
                     className="d-block img-fluid mx-auto mb-3"/>
                <h1 id="header__container__title"
                    className="h1 text-white text-center">
                    Merch Store
                </h1>
            </div>
        </header>
    )
}

export default Header
