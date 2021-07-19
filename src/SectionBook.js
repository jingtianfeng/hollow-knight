import piano1 from "./img/book/piano-collection-1.png";
import piano2 from "./img/book/piano-collection-2.png";
import hrTop from "./img/hr2.png";
import hrBottom from "./img/hr-bottom.png";
import journal1 from "./img/book/wanderer-journal-1.png";
import journal2 from "./img/book/wanderer-journal-2.png";
import journal3 from "./img/book/wanderer-journal-3.png";
import guide from "./img/illustration-guide2.webp";
import monster from "./img/illustration-monster2.webp";
import feather from "./img/illustration-feather.webp";

function SectionBook() {
    return (
        <section id="section-book"
                 className="pt-6 pb-7 border-bottom">
            <div className="container">
                <h2>
                    Books
                </h2>
                <div id="piano"
                     className="row gy-5 gx-lg-7 mt-5">
                    <div className="col-12 col-lg-5">
                        <div id="piano__carousel"
                             className="carousel slide"
                             data-bs-interval="false" data-bs-wrap="true">
                            <div className="carousel-indicators">
                                <button type="button"
                                        className="active rounded-circle"
                                        data-bs-target="#piano__carousel" data-bs-slide-to="0"
                                        aria-current="true" aria-label="Slide 1"/>
                                <button type="button" className="rounded-circle"
                                        data-bs-target="#piano__carousel" data-bs-slide-to="1"
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
                    </div>
                    <div id="piano__form"
                         className="col-12 col-lg-7">
                        <h3 id="piano__form__title"
                            className="h3 text-center">
                            Piano Collections
                        </h3>
                        <div id="piano__form__description"
                             className="my-4">
                            <img src={hrTop} alt="hr"
                                 className="w-100"/>
                            <ol id="piano__form__description__list"
                                className="m-0 py-4 ps-5 ps-md-7">
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
                            <img src={hrBottom} alt="hr"
                                 className="w-100"/>
                        </div>
                        <label htmlFor="piano__form__number">
                            QTY (max. 5)
                        </label>
                        <input type="number" min="1" max="5"
                               id="piano__form__number"
                               className=""/>
                        <div id="piano__form__price">
                            $25
                        </div>
                        <button type="button"
                                id="piano__form__button"
                                className="btn btn-primary btn-lg">
                            add to cart
                        </button>
                    </div>
                </div>
                <div id="journal"
                     className="row gy-5 gx-lg-7 mt-5">
                    <div className="col-12 col-lg-5">
                        <div id="journal__carousel" className="carousel slide"
                             data-bs-interval="false" data-bs-wrap="true">
                            <div className="carousel-indicators">
                                <button type="button" className="active rounded-circle"
                                        data-bs-target="#journal__carousel" data-bs-slide-to="0"
                                        aria-current="true" aria-label="Slide 1"/>
                                <button type="button" className="rounded-circle"
                                        data-bs-target="#journal__carousel" data-bs-slide-to="1"
                                        aria-label="Slide 2"/>
                                <button type="button" className="rounded-circle"
                                        data-bs-target="#journal__carousel" data-bs-slide-to="2"
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
                    </div>
                    <div id="journal__form"
                         className="col-12 col-lg-7">
                        <h3 id="journal__form__title"
                            className="h3 text-center">
                            Wanderer's Journal
                        </h3>
                        <div id="journal__form__description"
                             className="my-4">
                            <img src={hrTop} alt="hr"
                                 className="w-100"/>
                            <div className="py-4 row gy-5 gx-md-5 text-center">
                                <div className="col-12 col-md-4">
                                    <img src={guide} alt="guide"
                                         className="d-block mx-auto"
                                         style={{height: 100, width: 100}}/>
                                    <p className="mb-0 mt-3 mx-auto"
                                       style={{maxWidth: 260}}>
                                        A comprehensive guide to all of Hallownest's varied environments
                                    </p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <img src={monster} alt="monster"
                                         className="d-block mx-auto"
                                         style={{height: 100, width: 100}}/>
                                    <p className="mb-0 mt-3 mx-auto"
                                       style={{maxWidth: 260}}>
                                        Friendly faces, fearsome foes, flora, fauna and fungi
                                    </p>
                                </div>
                                <div className="col-12 col-md-4">
                                    <img src={feather} alt="feather"
                                         className="d-block mx-auto"
                                         style={{height: 100, width: 100}}/>
                                    <p className="mb-0 mt-3 mx-auto"
                                       style={{maxWidth: 260}}>
                                        A void-black faux leather cover with silver and blue foil
                                    </p>
                                </div>
                            </div>
                            <img src={hrBottom} alt="hr"
                                 className="w-100"/>
                        </div>
                        <label htmlFor="journal__form__number">
                            QTY (max. 5)
                        </label>
                        <input type="number" min="1" max="5"
                               id="journal__form__number"/>
                        <div id="journal__form__price">
                            $29
                        </div>
                        <button type="button"
                                id="journal__form__button"
                                className="btn btn-primary btn-lg">
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBook
