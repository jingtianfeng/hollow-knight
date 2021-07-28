import hrTop from "./img/hr2.png";
import hrBottom from "./img/hr-bottom.png";
import OptionQuantity from "./OptionQuantity";

function SectionBook({ARR_MAP_BOOK}) {
    return (
        <section id="section-book"
                 className="pt-6 pb-7 border-bottom">
            <div className="container">
                <h2>
                    Books
                </h2>
                {
                    ARR_MAP_BOOK.map((MAP_BOOK, idx) => {
                        return (
                            <div id={MAP_BOOK.get("ID")} key={idx}
                                 className="row gy-5 gx-lg-7 mt-5">
                                <div className="col-12 col-lg-5">
                                    <div id={`${MAP_BOOK.get("ID")}__carousel`}
                                         className="carousel slide"
                                         data-bs-interval="false"
                                         data-bs-wrap="true">
                                        <div className="carousel-indicators">
                                            {MAP_BOOK.get("IMAGES").map((_, imgIdx) => {
                                                return (
                                                    <button type="button"
                                                            key={imgIdx}
                                                            className={`rounded-circle ${imgIdx === 0 ? 'active' : ''}`}
                                                            data-bs-target={`#${MAP_BOOK.get("ID")}__carousel`}
                                                            data-bs-slide-to={imgIdx}
                                                            aria-label={`slide ${imgIdx + 1}`}
                                                            aria-current={imgIdx === 0}/>
                                                )
                                            })}
                                        </div>
                                        <div className="carousel-inner">
                                            {MAP_BOOK.get("IMAGES").map((imgObj, imgIdx) => {
                                                return (
                                                    <div key={imgIdx}
                                                         className={`carousel-item ${imgIdx === 0 ? 'active' : ''}`}>
                                                        <img src={imgObj.src} alt={imgObj.alt}
                                                             height="auto" width="600"
                                                             className="d-block w-100"/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <button type="button"
                                                className="carousel-control-prev"
                                                data-bs-target={`#${MAP_BOOK.get("ID")}__carousel`}
                                                data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"
                                              aria-hidden="true"/>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button type="button"
                                                className="carousel-control-next"
                                                data-bs-target={`#${MAP_BOOK.get("ID")}__carousel`}
                                                data-bs-slide="next">
                                        <span className="carousel-control-next-icon"
                                              aria-hidden="true"/>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div id={`${MAP_BOOK.get("ID")}__form`}
                                     className="col-12 col-lg-7">
                                    <h3 id={`${MAP_BOOK.get("ID")}__form__title`}
                                        className="h3 text-center">
                                        {MAP_BOOK.get("TITLE")}
                                    </h3>
                                    <div id={`${MAP_BOOK.get("ID")}__form__description`}
                                         className="my-4">
                                        <img src={hrTop} alt="hr"
                                             height="auto" width="600"
                                             className="w-100"/>
                                        {MAP_BOOK.get("DESCRIPTION")}
                                        <img src={hrBottom} alt="hr"
                                             height="auto" width="600"
                                             className="w-100"/>
                                    </div>
                                    <OptionQuantity max={MAP_BOOK.get("QTY_MAX")}/>
                                    <div id={`${MAP_BOOK.get("ID")}__form__price`}>
                                        {`$${MAP_BOOK.get("PRICE")}`}
                                    </div>
                                    <button type="button"
                                            id={`${MAP_BOOK.get("ID")}__form__button`}
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
