import "./App.sass"
import vinylGN2 from './img/vinyl/gods-nightmares-2.png'
import vinylOriginal2 from './img/vinyl/original-2.png'
import myla from './img/myla.png'
import NavTop from "./NavTop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import SectionBook from "./SectionBook";

function App() {
    return (
        <>
            <NavTop/>
            <Cart/>
            <Checkout/>
            <Header/>
            <SectionBook/>
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
