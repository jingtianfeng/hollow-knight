import piano1 from "./img/book/piano-collection-1.png";
import piano2 from "./img/book/piano-collection-2.png";
import journal1 from "./img/book/wanderer-journal-1.png";
import journal2 from "./img/book/wanderer-journal-2.png";
import journal3 from "./img/book/wanderer-journal-3.png";
import hrTop from "./img/hr2.png";
import hrBottom from "./img/hr-bottom.png";
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
                {[
                    {
                        id: 'piano',
                        arrImgSrc: [
                            {
                                src: `${piano1}`,
                                alt: 'piano front',
                            },
                            {
                                src: `${piano2}`,
                                alt: 'piano back',
                            }
                        ],
                        heading: 'Piano Collections',
                        description: (
                            <ol id="piano__form__description__list"
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
                        ),
                        quantityMax: 5,
                        price: 25,
                    },
                    {
                        id: 'journal',
                        arrImgSrc: [
                            {
                                src: `${journal1}`,
                                alt: 'journal front',
                            },
                            {
                                src: `${journal2}`,
                                alt: 'journal back',
                            },
                            {
                                src: `${journal3}`,
                                alt: 'journal page',
                            }
                        ],
                        heading: "Wanderer's Journal",
                        description: (
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
                        ),
                        quantityMax: 3,
                        price: 29,
                    },
                ].map(({id, arrImgSrc, heading, description, quantityMax, price}, idx) => {
                    return (
                        <div id={id} key={idx}
                             className="row gy-5 gx-lg-7 mt-5">
                            <div className="col-12 col-lg-5">
                                <div id={`${id}__carousel`}
                                     className="carousel slide"
                                     data-bs-interval="false" data-bs-wrap="true">
                                    <div className="carousel-indicators">
                                        {arrImgSrc.map((_, imgIdx) => {
                                            return (
                                                <button type="button" key={imgIdx}
                                                        className={`rounded-circle ${imgIdx === 0 ? 'active' : ''}`}
                                                        data-bs-target={`#${id}__carousel`}
                                                        data-bs-slide-to={imgIdx}
                                                        aria-label={`slide ${imgIdx + 1}`}
                                                        aria-current={imgIdx === 0}/>
                                            )
                                        })}
                                    </div>
                                    <div className="carousel-inner">
                                        {arrImgSrc.map((imgObj, imgIdx) => {
                                            return (
                                                <div key={imgIdx}
                                                     className={`carousel-item ${imgIdx === 0 ? 'active' : ''}`}>
                                                    <img src={imgObj.src} alt={imgObj.alt}
                                                         className="d-block w-100"/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <button type="button"
                                            className="carousel-control-prev"
                                            data-bs-target={`#${id}__carousel`}
                                            data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"
                                              aria-hidden="true"/>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                            data-bs-target={`#${id}__carousel`}
                                            data-bs-slide="next">
                                        <span className="carousel-control-next-icon"
                                              aria-hidden="true"/>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div id={`${id}__form`}
                                 className="col-12 col-lg-7">
                                <h3 id={`${id}__form__title`}
                                    className="h3 text-center">
                                    {heading}
                                </h3>
                                <div id={`${id}__form__description`}
                                     className="my-4">
                                    <img src={hrTop} alt="hr"
                                         className="w-100"/>
                                    {description}
                                    <img src={hrBottom} alt="hr"
                                         className="w-100"/>
                                </div>
                                <label htmlFor={`${id}__form__number`}>
                                    QTY (max. {quantityMax})
                                </label>
                                <input type="number"
                                       min="1" max={quantityMax}
                                       id={`${id}__form__number`}/>
                                <div id={`${id}__form__price`}>
                                    {`$${price}`}
                                </div>
                                <button type="button"
                                        id={`${id}__form__button`}
                                        className="btn btn-primary btn-lg">
                                    add to cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SectionBook
