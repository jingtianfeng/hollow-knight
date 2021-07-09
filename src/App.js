import "./App.sass"
import icon from './img/icon/black-64.png'
import cart from '@streamlinehq/streamlinehq/img/streamline-light/shopping-ecommerce/carts/shopping-cart-1.svg'
import logo from './img/logo.png'
import BookPiano from "./BookPiano";
import BookJournal from "./BookJournal";
import vinylGN2 from "./img/vinyl/gods-nightmares-2.png"
import vinylOriginal2 from "./img/vinyl/original-2.png"
import myla from "./img/myla.png"

function App() {
    return (
        <>
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
                    <div className="btn"
                         data-bs-toggle="offcanvas" data-bs-target="#cart"
                         aria-controls="cart">
                        <img src={cart} alt="cart icon"/>
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
            <div id="cart" className="offcanvas offcanvas-end"
                 data-bs-backdrop="false" data-bs-scroll="true"
                 aria-hidden="true" aria-labelledby="cart" tabIndex="-1">
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title">
                        Cart
                    </h2>
                    <button type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="close"/>
                </div>
                <div className="offcanvas-body">
                    Your cart is empty.
                    <button className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#checkout"
                            data-bs-dismiss="offcanvas">
                        checkout
                    </button>
                </div>
            </div>
            <div id="checkout" className="modal fade"
                 aria-hidden="true" aria-labelledby="checkout" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">
                                Checkout
                            </h2>
                            <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Hide this modal and show the first with the button below.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#cart"
                                    data-bs-dismiss="modal">
                                back to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header">
                <div id="header__container" className="container">
                    <img src={logo} alt="logo"
                         id="header__container__logo"/>
                    <h1 id="header__container__title">
                        Merch Store
                    </h1>
                </div>
            </header>
            <section id="section-book">
                <div className="container">
                    <h2>
                        Books
                    </h2>
                    <BookPiano/>
                    <BookJournal/>
                </div>
            </section>
            <section id="section-coming">
                <div className="container">
                    <h2>
                        Vinyls Coming Soon!
                    </h2>
                    <p>
                        (placeholder)
                    </p>
                    <div className="card">
                        <img src={vinylGN2} alt="vinyl - gods and nightmares soundtrack"
                             className="card-img"/>
                        <div className="card-img-overlay">
                            <p className="card-text">
                                Gods & Nightmares
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={vinylOriginal2} alt="vinyl - original soundtrack"
                             className="card-img"/>
                        <div className="card-img-overlay">
                            <p className="card-text">
                                Original
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div className="container">
                    <img src={myla} alt="myla wants you to join our newsletter"
                         className=""/>
                    <form action="/"
                          id="newsletter">
                        <label htmlFor="newsletter__input"
                               className="">
                            Join our newsletter!
                        </label>
                        <input type="email" placeholder="myla@hallownest.com"
                               id="newsletter__input"/>
                        <button>sign up</button>
                    </form>
                    <p id="signature">
                        Made with ♥ by JT Feng
                    </p>
                </div>
            </footer>
        </>
    )
}

export default App
