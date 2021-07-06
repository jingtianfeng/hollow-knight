import journal1 from './img/book/wanderer-journal-1.webp'
import journal2 from './img/book/wanderer-journal-2.webp'
import journal3 from './img/book/wanderer-journal-3.webp'

function BookJournal() {
    return (
        <div id="journal">
            <div id="journal__carousel" className="carousel slide"
                 data-bs-interval="false" data-bs-wrap="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#journal__carousel" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#journal__carousel" data-bs-slide-to="1"
                            aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#journal__carousel" data-bs-slide-to="2"
                            aria-label="Slide 3"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={journal1} className="d-block w-100" alt="book front"/>
                    </div>
                    <div className="carousel-item">
                        <img src={journal2} className="d-block w-100" alt="book back"/>
                    </div>
                    <div className="carousel-item">
                        <img src={journal3} className="d-block w-100" alt="book inside"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button"
                        data-bs-target="#journal__carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                        data-bs-target="#journal__carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="journal__form">
                <h2 id="journal__form__title">
                    Wanderer's Journal
                </h2>
                <div id="journal__form__description">
                    <p>
                        Art book features:
                    </p>
                    <ul>
                        <li>
                            A comprehensive guide to all of Hallownest's varied environments
                        </li>
                        <li>
                            Friendly faces, fearsome foes, flora, fauna and fungi
                        </li>
                        <li>
                            A void-black faux leather cover with silver and blue foil that shines like a Lumafly Lantern
                        </li>
                    </ul>
                </div>
                <div id="journal__form__price">
                    $29
                </div>
                <button type="button"
                        id="journal__form__button">
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default BookJournal
