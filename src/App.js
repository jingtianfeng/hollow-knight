import "./App.sass"
import icon from './img/icon/white-32.png'
import logo from './img/logo.png'
import hrTop from './img/hr2.png'
import hrBottom from './img/hr-bottom.png'
import piano1 from './img/book/piano-collection-1.png'
import piano2 from './img/book/piano-collection-2.png'
import journal1 from './img/book/wanderer-journal-1.png'
import journal2 from './img/book/wanderer-journal-2.png'
import journal3 from './img/book/wanderer-journal-3.png'
import guide from './img/illustration-guide2.webp'
import monster from './img/illustration-monster2.webp'
import feather from './img/illustration-feather.webp'
import vinylGN2 from './img/vinyl/gods-nightmares-2.png'
import vinylOriginal2 from './img/vinyl/original-2.png'
import myla from './img/myla.png'

function App() {
    return (
        <>
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
            <header id="header"
                    className="border-bottom py-7">
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
            <section id="section-book"
                     className="py-7 border-bottom">
                <div className="container">
                    <h2>
                        Books
                    </h2>
                    <div id="piano"
                         className="row gy-5 gx-lg-7 mt-7">
                        <div className="col-12 col-lg-5">
                            <div id="piano__carousel"
                                 className="carousel slide"
                                 data-bs-interval="false" data-bs-wrap="true">
                                <div className="carousel-indicators">
                                    <button type="button"
                                            className="active rounded-circle"
                                            data-bs-target="#piano__carousel" data-bs-slide-to="0"
                                            aria-current="true" aria-label="Slide 1"/>
                                    <button type="button" className="rounded-circle"
                                            data-bs-target="#piano__carousel" data-bs-slide-to="1"
                                            aria-label="Slide 2"/>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={piano1} className="d-block w-100" alt="book front"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={piano2} className="d-block w-100" alt="book back"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#piano__carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#piano__carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div id="piano__form"
                             className="col-12 col-lg-7">
                            <h3 id="piano__form__title"
                                className="h3 text-center">
                                Piano Collections
                            </h3>
                            <div id="piano__form__description"
                                 className="my-4">
                                <img src={hrTop} alt="hr"
                                     className="w-100"/>
                                <ol id="piano__form__description__list"
                                    className="m-0 py-4 ps-5 ps-md-7">
                                    <li>Dirtmouth</li>
                                    <li>Crossroads</li>
                                    <li>Greenpath</li>
                                    <li>Hornet</li>
                                    <li>Reflection</li>
                                    <li>Mantis Lords</li>
                                    <li>City of Tears</li>
                                    <li>Resting Grounds</li>
                                    <li>Dung Defender</li>
                                    <li>Queen's Gardens</li>
                                    <li>White Palace</li>
                                    <li>Sealed Vessel</li>
                                    <li>Radiance</li>
                                    <li>Hollow Knight</li>
                                    <li>Grimm Troupe</li>
                                </ol>
                                <img src={hrBottom} alt="hr"
                                     className="w-100"/>
                            </div>
                            <label htmlFor="piano__form__number">
                                QTY (max. 5)
                            </label>
                            <input type="number" min="1" max="5"
                                   id="piano__form__number"/>
                            <div id="piano__form__price">
                                $25 x 1 = $25
                            </div>
                            <button type="button"
                                    id="piano__form__button">
                                add to cart
                            </button>
                        </div>
                    </div>
                    <div id="journal"
                         className="row gy-5 gx-lg-7 mt-7">
                        <div className="col-12 col-lg-5">
                            <div id="journal__carousel" className="carousel slide"
                                 data-bs-interval="false" data-bs-wrap="true">
                                <div className="carousel-indicators">
                                    <button type="button" className="active rounded-circle"
                                            data-bs-target="#journal__carousel" data-bs-slide-to="0"
                                            aria-current="true" aria-label="Slide 1"/>
                                    <button type="button" className="rounded-circle"
                                            data-bs-target="#journal__carousel" data-bs-slide-to="1"
                                            aria-label="Slide 2"/>
                                    <button type="button" className="rounded-circle"
                                            data-bs-target="#journal__carousel" data-bs-slide-to="2"
                                            aria-label="Slide 3"/>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={journal1} className="d-block w-100" alt="book front"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={journal2} className="d-block w-100" alt="book back"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={journal3} className="d-block w-100" alt="book inside"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#journal__carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#journal__carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div id="journal__form"
                             className="col-12 col-lg-7">
                            <h3 id="journal__form__title"
                                className="h3 text-center">
                                Wanderer's Journal
                            </h3>
                            <div id="journal__form__description"
                                 className="my-4">
                                <img src={hrTop} alt="hr"
                                     className="w-100"/>
                                <div className="py-4 row gy-5 gx-md-5 text-center">
                                    <div className="col-12 col-md-4">
                                        <img src={guide} alt="guide"
                                             className="d-block mx-auto"
                                             style={{height: 100, width: 100}}/>
                                        <p className="mb-0 mt-3 mx-auto"
                                           style={{maxWidth: 260}}>
                                            A comprehensive guide to all of Hallownest's varied environments
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <img src={monster} alt="monster"
                                             className="d-block mx-auto"
                                             style={{height: 100, width: 100}}/>
                                        <p className="mb-0 mt-3 mx-auto"
                                           style={{maxWidth: 260}}>
                                            Friendly faces, fearsome foes, flora, fauna and fungi
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <img src={feather} alt="feather"
                                             className="d-block mx-auto"
                                             style={{height: 100, width: 100}}/>
                                        <p className="mb-0 mt-3 mx-auto"
                                           style={{maxWidth: 260}}>
                                            A void-black faux leather cover with silver and blue foil
                                        </p>
                                    </div>
                                </div>
                                <img src={hrBottom} alt="hr"
                                     className="w-100"/>
                            </div>
                            <label htmlFor="journal__form__number">
                                QTY (max. 5)
                            </label>
                            <input type="number" min="1" max="5"
                                   id="journal__form__number"/>
                            <div id="journal__form__price">
                                $29 x 1 = $29
                            </div>
                            <button type="button"
                                    id="journal__form__button">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-coming"
                     className="py-7 border-bottom">
                <div className="container">
                    <h2 className="h2">
                        Coming Soon
                    </h2>
                    <p>
                        (placeholder)
                    </p>
                    <div className="row">
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
                </div>
            </section>
            <footer id="footer"
                    className="py-7">
                <div className="container">
                    <img src={myla} alt="join our newsletter"
                         className="img-fluid"/>
                    <form action="/"
                          id="newsletter">
                        <label htmlFor="newsletter__input"
                               className="h2">
                            Join our newsletter!
                        </label>
                        <input type="email" placeholder="myla@hallownest.com"
                               id="newsletter__input"/>
                        <button>
                            sign up
                        </button>
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
