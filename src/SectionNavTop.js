import icon from "./img/icon/white-32.png";

function SectionNavTop({qtyTotal}) {
    return (
        <nav id="navbar"
             className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom"
             style={{fontFamily: "Cinzel", fontWeight: 500}}>
            <div id="navbar__container" className="container">
                <button id="navbar__container__toggler"
                        className="navbar-toggler fs-6 border-0"
                        style={{fontWeight: 500}}
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
                     style={{fontWeight: 500}}
                     data-bs-toggle="offcanvas" data-bs-target="#cart"
                     aria-controls="cart">
                    CART
                    <span className="badge rounded-pill text-body
                                         position-absolute top-0 start-100 translate-middle-x">
                            {qtyTotal > 0 ? qtyTotal : null}
                        <span className="visually-hidden">{qtyTotal} items in shopping cart</span>
                        </span>
                </div>
                <div id="navbar__container__menu"
                     className="collapse navbar-collapse justify-content-lg-center">
                    <ul id="navbar__container__menu__nav"
                        className="navbar-nav navbar-nav-scroll m-lg-0"
                        style={{margin: 12}}>
                        {[
                            {
                                href: "#top",
                                text: "Home"
                            },
                            {
                                href: "#section-book",
                                text: "Books"
                            },
                            {
                                href: "#section-coming",
                                text: "Coming Soon"
                            },
                            {
                                href: "#footer",
                                text: "Newsletter"
                            }
                        ].map(({href, text}, idx) => {
                            return (
                                <li className="nav-item" key={idx}>
                                    <a href={href} className="nav-link">{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SectionNavTop;
