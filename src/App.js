import SectionNavTop from "./SectionNavTop";
import SectionCart from "./SectionCart";
import SectionCheckout from "./SectionCheckout";
import SectionHeader from "./SectionHeader";
import SectionBook from "./SectionBook";
import SectionComing from "./SectionComing";
import SectionFooter from "./SectionFooter";
import imgPiano1 from "./img/book/piano-collection-1.png";
import imgPiano2 from "./img/book/piano-collection-2.png";
import imgJournal1 from "./img/book/wanderer-journal-1.png";
import imgJournal2 from "./img/book/wanderer-journal-2.png";
import imgJournal3 from "./img/book/wanderer-journal-3.png";
import illGuide from "./img/illustration-guide2.webp";
import illMonster from "./img/illustration-monster2.webp";
import illFeather from "./img/illustration-feather.webp";
import {useState} from "react";

function App() {
    const piano = {
        ID: "piano",
        TITLE: "Piano Collections",
        QTY_MAX: 5,
        PRICE: 25
    };
    piano.IMAGES = [
        {
            src: imgPiano1,
            alt: `Book Front - ${piano.TITLE}`
        },
        {
            src: imgPiano2,
            alt: `Book Back - ${piano.TITLE}`
        }
    ];
    piano.DESCRIPTION = (
        <ol id={`${piano.ID}__form__description__list`}
            className="m-0 py-4 ps-5 ps-md-7">
            {[
                "Dirtmouth",
                "Crossroads",
                "Greenpath",
                "Hornet",
                "Reflection",
                "Mantis Lords",
                "City of Tears",
                "Resting Grounds",
                "Dung Defender",
                "Queen's Gardens",
                "White Palace",
                "Sealed Vessel",
                "Radiance",
                "Hollow Knight",
                "Grimm Troupe"
            ].map((song, songIdx) => {
                    return (
                        <li key={songIdx}>
                            {song}
                        </li>
                    );
                }
            )}
        </ol>
    );
    let [stateCartPianoQty, setCartPianoQty] = useState(0);
    piano.stateCartQty = stateCartPianoQty;
    piano.setCartQty = setCartPianoQty;
    let [stateFormPianoQty, setFormPianoQty] = useState(1);
    piano.stateFormQty = stateFormPianoQty;
    piano.setFormQty = setFormPianoQty;

    const journal = {
        ID: "journal",
        TITLE: "Wanderer's Journal",
        QTY_MAX: 3,
        PRICE: 29
    };
    journal.IMAGES = [
        {
            src: imgJournal1,
            alt: `Book Front - ${journal.TITLE}`
        },
        {
            src: imgJournal2,
            alt: `Book Back - ${journal.TITLE}`
        },
        {
            src: imgJournal3,
            alt: `Book Inside - ${journal.TITLE}`
        }
    ];
    journal.DESCRIPTION = (
        <div className="py-4 row gy-5 gx-md-5 text-center">
            {[
                {
                    imgSrc: `${illGuide}`,
                    text: "A comprehensive guide to all of Hallownest's varied environments"
                },
                {
                    imgSrc: `${illMonster}`,
                    text: "Friendly faces, fearsome foes, flora, fauna and fungi"
                },
                {
                    imgSrc: `${illFeather}`,
                    text: "A void-black faux leather cover with silver and blue foil"
                }
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
                    );
                }
            )}
        </div>
    );
    let [stateCartJournalQty, setCartJournalQty] = useState(0);
    journal.stateCartQty = stateCartJournalQty;
    journal.setCartQty = setCartJournalQty;
    let [stateFormJournalQty, setFormJournalQty] = useState(1);
    journal.stateFormQty = stateFormJournalQty;
    journal.setFormQty = setFormJournalQty;

    const arrBook = [piano, journal];

    return (
        <>
            <SectionNavTop qtyTotal={stateCartPianoQty + stateCartJournalQty}/>
            <SectionCart arrBook={arrBook}/>
            <SectionCheckout/>
            <SectionHeader/>
            <SectionBook arrBook={arrBook}/>
            <SectionComing/>
            <SectionFooter/>
        </>
    );
}

export default App;
