import './App.sass'
import NavTop from './NavTop'
import Header from "./Header";
import BookPiano from "./BookPiano";

function App() {
    return (
        <>
            <NavTop/>
            <Header/>
            <section id="section-book">
                <div className="container">
                    <BookPiano/>
                </div>
            </section>
        </>
    )
}

export default App
