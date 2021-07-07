import "./App.sass"
import NavTop from "./NavTop"
import Header from "./Header";
import BookPiano from "./BookPiano";
import BookJournal from "./BookJournal";
import vinylGN2 from "./img/vinyl/gods-nightmares-2.webp"
import vinylOriginal2 from "./img/vinyl/original-2.webp"
import myla from "./img/myla.png"

function App() {
    return (
        <>
            <NavTop/>
            <Header/>
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
            <section id="section-newsletter">
                <div className="container">
                    <img src={myla} alt="myla wants you to join our newsletter"
                         className=""/>
                    <form action="/">
                        <label htmlFor="newsletter__input"
                               className="">
                            Join our newsletter!
                        </label>
                        <input type="email" placeholder="myla@hallownest.com"
                               id="newsletter__input"/>
                        <button>sign up</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default App
