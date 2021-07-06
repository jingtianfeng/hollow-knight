import './App.sass'
import NavTop from './NavTop'
import Header from "./Header";
import BookPiano from "./BookPiano";
import BookJournal from "./BookJournal";

function App() {
    return (
        <>
            <NavTop/>
            <Header/>
            <section id="section-book">
                <div className="container">
                    <BookPiano/>
                    <BookJournal/>
                </div>
            </section>
        </>
    )
}

export default App
