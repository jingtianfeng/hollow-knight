import icon from './img/icon/black-64.png'
import ShoppingCart from '@streamlinehq/streamlinehq/img/streamline-light/shopping-ecommerce/carts/shopping-cart-1.svg'

function NavTop() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar__container__menu"
                        aria-controls="navbar__container__menu"
                        aria-expanded="false"
                        aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <img src={icon} alt="icon"
                     className="navbar-brand"/>
                <div className="">
                    <img src={ShoppingCart} alt="shopping cart"/>
                    <span>(USD $19.95)</span>
                </div>
                <div id="navbar__container__menu"
                     className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavTop
