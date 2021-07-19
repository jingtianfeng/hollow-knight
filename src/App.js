import "./App.sass"
import myla from './img/myla.png'
import NavTop from "./NavTop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import SectionBook from "./SectionBook";
import SectionComing from "./SectionComing";

function App() {
    return (
        <>
            <NavTop/>
            <Cart/>
            <Checkout/>
            <Header/>
            <SectionBook/>
            <SectionComing/>
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
