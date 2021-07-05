import './Header.sass'
import logo from './img/logo.png'

function Header() {
    return (
        <header id="header">
            <div id="header__container" className="container">
                <img src={logo} alt="logo"
                     id="header__container__logo"/>
                <h1 id="header__container__title">
                    Merch Store
                </h1>
            </div>
        </header>
    )
}

export default Header
