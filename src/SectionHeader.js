import logo from "./img/logo.png";
import banner from "./img/banner.png"

function SectionHeader() {
    return (
        <header id="header"
                className="border-bottom py-5"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right"
                }}>
            <div id="header__container" className="container">
                <img src={logo} alt="logo"
                     id="header__container__logo"
                     className="d-block img-fluid mx-auto mb-3"/>
                <h1 id="header__container__title"
                    className="h1 text-white text-center"
                    style={{
                        opacity: 0.95,
                        textShadow: '-1px 0 #161a44, 0 1px #161a44, 1px 0 #161a44, 0 -1px #161a44'
                    }}>
                    Merch Store
                </h1>
            </div>
        </header>
    )
}

export default SectionHeader
