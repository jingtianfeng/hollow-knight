import "./App.sass"
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
import NavTop from "./NavTop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";

function App() {
    return (
        <>
            <NavTop/>
            <Cart/>
            <Checkout/>
            <Header/>
            <section id="section-book"
                     className="pt-6 pb-7 border-bottom">
                <div className="container">
                    <h2>
                        Books
                    </h2>
                    <div id="piano"
                         className="row gy-5 gx-lg-7 mt-5">
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
                                   id="piano__form__number"
                                   className=""/>
                            <div id="piano__form__price">
                                $25
                            </div>
                            <button type="button"
                                    id="piano__form__button"
                                    className="btn btn-primary btn-lg">
                                add to cart
                            </button>
                        </div>
                    </div>
                    <div id="journal"
                         className="row gy-5 gx-lg-7 mt-5">
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
                                $29
                            </div>
                            <button type="button"
                                    id="journal__form__button"
                                    className="btn btn-primary btn-lg">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-coming"
                     className="py-6 border-bottom">
                <div className="container">
                    <h2 className="h2">
                        Coming Soon
                    </h2>
                    <p>
                        (placeholder)
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 gy-5 gx-md-5 text-center">
                        <div className="col">
                            <div className="card bg-transparent">
                                <img src={vinylGN2}
                                     alt="vinyl - gods and nightmares soundtrack"
                                     className="card-img"/>
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <h3 className="card-text h6">
                                        Gods & Nightmares
                                    </h3>
                                    <p className="fst-italic mb-0 mb-lg-5">
                                        vinyl
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-transparent">
                                <img src={vinylOriginal2}
                                     alt="vinyl - original soundtrack"
                                     className="card-img"/>
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <h3 className="card-text h6">
                                        Original
                                    </h3>
                                    <p className="fst-italic mb-0 mb-lg-5">
                                        vinyl
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer"
                    className="py-6">
                <div className="container">
                    <div className="row gy-5 gx-md-5 align-items-md-center">
                        <div className="col-12 col-md-6 col-lg-5">
                            <img src={myla} alt="join our newsletter"
                                 className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7">
                            <form action="/"
                                  id="newsletter">
                                <label htmlFor="newsletter__input"
                                       className="display-4 d-block mb-4 mb-lg-5">
                                    Join our newsletter!
                                </label>
                                <div className="input-group input-group-lg">
                                    <input type="email" placeholder="myla@hallownest.com"
                                           id="newsletter__input"
                                           className="form-control"
                                           style={{maxWidth: 300}}/>
                                    <button className="btn btn-primary">
                                        sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p id="signature"
                       className="mb-0 text-center mt-6">
                        Made with ♥ by JT Feng
                    </p>
                </div>
            </footer>
        </>
    )
}

export default App
