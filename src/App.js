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
import guide from "./img/illustration-guide2.webp";
import monster from "./img/illustration-monster2.webp";
import feather from "./img/illustration-feather.webp";
import {useState} from "react";

function App() {
    const MAP_BOOK_PIANO = new Map();
    MAP_BOOK_PIANO.set("ID", "piano");
    MAP_BOOK_PIANO.set("TITLE", "Piano Collections");
    MAP_BOOK_PIANO.set("QTY_MAX", 5);
    MAP_BOOK_PIANO.set("PRICE", 25);
    MAP_BOOK_PIANO.set("IMAGES", [
        {
            src: bookPiano1,
            alt: `Book Front - ${MAP_BOOK_PIANO.get("TITLE")}`,
        },
        {
            src: bookPiano2,
            alt: `Book Back - ${MAP_BOOK_PIANO.get("TITLE")}`,
        },
    ]);
    MAP_BOOK_PIANO.set("DESCRIPTION", (
        <ol id={`${MAP_BOOK_PIANO.get("ID")}__form__description__list`}
            className="m-0 py-4 ps-5 ps-md-7">
            {[
                'Dirtmouth',
                'Crossroads',
                'Greenpath',
                'Hornet',
                'Reflection',
                'Mantis Lords',
                'City of Tears',
                'Resting Grounds',
                'Dung Defender',
                "Queen's Gardens",
                'White Palace',
                'Sealed Vessel',
                'Radiance',
                'Hollow Knight',
                'Grimm Troupe',
            ].map((song, songIdx) => {
                    return (
                        <li key={songIdx}>
                            {song}
                        </li>
                    )
                }
            )}
        </ol>
    ))
    let [stateBookPianoQtyCart, setBookPianoQtyCart] = useState(0);
    MAP_BOOK_PIANO.set("stateBookQtyCart", stateBookPianoQtyCart);
    MAP_BOOK_PIANO.set("setBookQtyCart", setBookPianoQtyCart);

    const MAP_BOOK_JOURNAL = new Map();
    MAP_BOOK_JOURNAL.set("ID", "journal");
    MAP_BOOK_JOURNAL.set("TITLE", "Wanderer's Journal");
    MAP_BOOK_JOURNAL.set("QTY_MAX", 3);
    MAP_BOOK_JOURNAL.set("PRICE", 29);
    MAP_BOOK_JOURNAL.set("IMAGES", [
        {
            src: bookJournal1,
            alt: `Book Front - ${MAP_BOOK_JOURNAL.get("TITLE")}`,
        },
        {
            src: bookJournal2,
            alt: `Book Back - ${MAP_BOOK_JOURNAL.get("TITLE")}`,
        },
        {
            src: bookJournal3,
            alt: `Book Inside - ${MAP_BOOK_JOURNAL.get("TITLE")}`,
        }
    ]);
    MAP_BOOK_JOURNAL.set("DESCRIPTION", (
        <div className="py-4 row gy-5 gx-md-5 text-center">
            {[
                {
                    imgSrc: `${guide}`,
                    text: 'A comprehensive guide to all of Hallownest\'s varied environments',
                },
                {
                    imgSrc: `${monster}`,
                    text: 'Friendly faces, fearsome foes, flora, fauna and fungi',
                },
                {
                    imgSrc: `${feather}`,
                    text: 'A void-black faux leather cover with silver and blue foil',
                },
            ].map(({imgSrc, text}, objIdx) => {
                    return (
                        <div key={objIdx}
                             className="col-12 col-md-4">
                            <img src={imgSrc} alt="guide"
                                 height="100" width="100"
                                 className="d-block mx-auto"
                                 style={{height: 100, width: 100}}/>
                            <p className="mb-0 mt-3 mx-auto"
                               style={{maxWidth: 250}}>
                                {text}
                            </p>
                        </div>
                    )
                }
            )}
        </div>
    ))
    let [stateBookJournalQtyCart, setBookJournalQtyCart] = useState(0);
    MAP_BOOK_JOURNAL.set("stateBookQtyCart", stateBookJournalQtyCart);
    MAP_BOOK_JOURNAL.set("setBookQtyCart", setBookJournalQtyCart);

    const ARR_MAP_BOOK = [MAP_BOOK_PIANO, MAP_BOOK_JOURNAL];

    return (
        <>
            <SectionNavTop/>
            <SectionCart/>
            <SectionCheckout/>
            <SectionHeader/>
            <CartItem MAP_BOOK={MAP_BOOK_PIANO}/>
            <CartItem MAP_BOOK={MAP_BOOK_JOURNAL}/>
            <SectionBook ARR_MAP_BOOK={ARR_MAP_BOOK}/>
            <SectionComing/>
            <SectionFooter/>
        </>
    )
}

export default App;
