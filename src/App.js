import SectionNavTop from "./SectionNavTop";
import SectionCart from "./SectionCart";
import SectionCheckout from "./SectionCheckout";
import SectionHeader from "./SectionHeader";
import SectionBook from "./SectionBook";
import SectionComing from "./SectionComing";
import SectionFooter from "./SectionFooter";
import CartItem from "./CartItem";
import bookPiano1 from "./img/book/piano-collection-1.png";
import bookPiano2 from "./img/book/piano-collection-2.png";
import bookJournal1 from "./img/book/wanderer-journal-1.png";
import bookJournal2 from "./img/book/wanderer-journal-2.png";
import bookJournal3 from "./img/book/wanderer-journal-3.png";

function App() {
    const BOOK_PIANO_ID = "piano";
    const BOOK_PIANO_TITLE = "Piano Collections";
    const BOOK_PIANO_IMAGES = [
        {
            src: bookPiano1,
            alt: `Book Front - ${BOOK_PIANO_TITLE}`,
        },
        {
            src: bookPiano2,
            alt: `Book Back - ${BOOK_PIANO_TITLE}`,
        },
    ];
    const BOOK_PIANO_PRICE = 25;
    const BOOK_PIANO_QTY_MAX = 5;

    const BOOK_JOURNAL_ID = "journal";
    const BOOK_JOURNAL_TITLE = "Wanderer's Journal";
    const BOOK_JOURNAL_IMAGES = [
        {
            src: bookJournal1,
            alt: `Book Front - ${BOOK_JOURNAL_TITLE}`,
        },
        {
            src: bookJournal2,
            alt: `Book Back - ${BOOK_JOURNAL_TITLE}`,
        },
        {
            src: bookJournal3,
            alt: `Book Inside - ${BOOK_JOURNAL_TITLE}`,
        }
    ];
    const BOOK_JOURNAL_PRICE = 29;
    const BOOK_JOURNAL_QTY_MAX = 3;

    return (
        <>
            <SectionNavTop/>
            <SectionCart/>
            <SectionCheckout/>
            <SectionHeader/>
            <CartItem imgSrc={bookPiano1}
                      title={BOOK_PIANO_TITLE}
                      qtyMax={BOOK_PIANO_QTY_MAX}
                      priceEach={BOOK_PIANO_PRICE}/>
            <CartItem imgSrc={bookJournal1}
                      title={BOOK_JOURNAL_TITLE}
                      qtyMax={BOOK_JOURNAL_QTY_MAX}
                      priceEach={BOOK_JOURNAL_PRICE}/>
            <SectionBook bookPianoID={BOOK_PIANO_ID}
                         bookPianoTitle={BOOK_PIANO_TITLE}
                         bookPianoImages={BOOK_PIANO_IMAGES}
                         bookPianoPriceEach={BOOK_PIANO_PRICE}
                         bookPianoQtyMax={BOOK_PIANO_QTY_MAX}
                         bookJournalID={BOOK_JOURNAL_ID}
                         bookJournalTitle={BOOK_JOURNAL_TITLE}
                         bookJournalImages={BOOK_JOURNAL_IMAGES}
                         bookJournalPriceEach={BOOK_JOURNAL_PRICE}
                         bookJournalQtyMax={BOOK_JOURNAL_QTY_MAX}/>
            <SectionComing/>
            <SectionFooter/>
        </>
    )
}

export default App;
