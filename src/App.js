import "./App.sass"
import NavTop from "./NavTop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import SectionBook from "./SectionBook";
import SectionComing from "./SectionComing";
import Footer from "./Footer";

function App() {
    return (
        <>
            <NavTop/>
            <Cart/>
            <Checkout/>
            <Header/>
            <SectionBook/>
            <SectionComing/>
            <Footer/>
        </>
    )
}

export default App
