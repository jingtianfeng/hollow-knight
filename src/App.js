import SectionNavTop from "./SectionNavTop";
import SectionCart from "./SectionCart";
import SectionCheckout from "./SectionCheckout";
import SectionHeader from "./SectionHeader";
import SectionBook from "./SectionBook";
import SectionComing from "./SectionComing";
import SectionFooter from "./SectionFooter";
import CartItem from "./CartItem";
import bookPiano from "./img/book/piano-collection-1.png"
import bookJournal from "./img/book/wanderer-journal-1.png"

function App() {
    return (
        <>
            <SectionNavTop/>
            <SectionCart/>
            <SectionCheckout/>
            <SectionHeader/>
            <CartItem imgSrc={bookPiano}
                      title="Piano Collections"
                      qtyMax={5} priceEach={25}/>
            <CartItem imgSrc={bookJournal}
                      title="Wanderer's Journal"
                      qtyMax={3} priceEach={29}/>
            <SectionBook/>
            <SectionComing/>
            <SectionFooter/>
        </>
    )
}

export default App
