import piano1 from './img/book/piano-collection-1.webp'
import piano2 from './img/book/piano-collection-2.webp'

function BookPiano() {
    return (
        <div id="piano">
            <div id="piano__carousel" className="carousel slide"
                 data-bs-interval="false" data-bs-wrap="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#piano__carousel" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#piano__carousel" data-bs-slide-to="1"
                            aria-label="Slide 2"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={piano1} className="d-block w-100" alt="book front"/>
                    </div>
                    <div className="carousel-item">
                        <img src={piano2} className="d-block w-100" alt="book back"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button"
                        data-bs-target="#piano__carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                        data-bs-target="#piano__carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="piano__form">
                <h3 id="piano__form__title">
                    Piano Collections
                </h3>
                <div id="piano__form__description">
                    <p>
                        Includes sheet music for the following songs:
                    </p>
                    <ol>
                        <li>Dirtmouth</li>
                        <li>Crossroads</li>
                        <li>Greenpath</li>
                        <li>Hornet</li>
                        <li>Reflection</li>
                        <li>Mantis Lords</li>
                        <li>City of Tears</li>
                        <li>Resting Grounds</li>
                        <li>Dung Defender</li>
                        <li>Queen's Gardens</li>
                        <li>White Palace</li>
                        <li>Sealed Vessel</li>
                        <li>Radiance</li>
                        <li>Hollow Knight</li>
                        <li>Grimm Troupe</li>
                    </ol>
                </div>
                <label htmlFor="piano__form__number">
                    QTY (max. 5)
                </label>
                <input type="number" min="1" max="5"
                       id="piano__form__number"/>
                <div id="piano__form__price">
                    $25 x 1 = $25
                </div>
                <button type="button"
                        id="piano__form__button">
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default BookPiano
