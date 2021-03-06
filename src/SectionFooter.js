import myla from "./img/myla.png";

function SectionFooter() {
    return (
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
                            <div className="input-group">
                                <input type="email" placeholder="myla@hallownest.com"
                                       id="newsletter__input"
                                       className="form-control fw-bold letter-spacing-3"
                                       style={{maxWidth: 300}}/>
                                <button type="button"
                                        className="btn btn-primary fw-bold letter-spacing-3"
                                        style={{fontSize: "0.875rem"}}>
                                    SIGN UP
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
    );
}

export default SectionFooter;
