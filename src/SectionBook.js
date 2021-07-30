import hrTop from "./img/hr2.png";
import hrBottom from "./img/hr-bottom.png";

function SectionBook({arrBook}) {
    return (
        <section id="section-book"
                 className="pt-6 pb-7 border-bottom">
            <div className="container">
                <h2>
                    Books
                </h2>
                {
                    arrBook.map((
                        {
                            ID, TITLE, QTY_MAX, PRICE, IMAGES, DESCRIPTION,
                            stateCartQty, setCartQty,
                            stateFormQty, setFormQty,
                        }, bookIdx) => {
                        return (
                            <div id={ID} key={bookIdx}
                                 className="row gy-5 gx-lg-7 mt-5">
                                <div className="col-12 col-lg-5">
                                    <div id={`${ID}__carousel`}
                                         className="carousel slide"
                                         data-bs-interval="false"
                                         data-bs-wrap="true">
                                        <div className="carousel-indicators">
                                            {IMAGES.map((_, imgIdx) => {
                                                return (
                                                    <button type="button"
                                                            key={imgIdx}
                                                            className={`rounded-circle ${imgIdx === 0 ? 'active' : ''}`}
                                                            data-bs-target={`#${ID}__carousel`}
                                                            data-bs-slide-to={imgIdx}
                                                            aria-label={`slide ${imgIdx + 1}`}
                                                            aria-current={imgIdx === 0}/>
                                                )
                                            })}
                                        </div>
                                        <div className="carousel-inner">
                                            {IMAGES.map((imgObj, imgIdx) => {
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
                                                data-bs-target={`#${ID}__carousel`}
                                                data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"
                                              aria-hidden="true"/>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button type="button"
                                                className="carousel-control-next"
                                                data-bs-target={`#${ID}__carousel`}
                                                data-bs-slide="next">
                                        <span className="carousel-control-next-icon"
                                              aria-hidden="true"/>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div id={`${ID}__form`}
                                     className="col-12 col-lg-7">
                                    <h3 id={`${ID}__form__title`}
                                        className="h3 text-center">
                                        {TITLE}
                                    </h3>
                                    <div id={`${ID}__form__description`}
                                         className="my-4">
                                        <img src={hrTop} alt="hr"
                                             height="auto" width="600"
                                             className="w-100"/>
                                        {DESCRIPTION}
                                        <img src={hrBottom} alt="hr"
                                             height="auto" width="600"
                                             className="w-100"/>
                                    </div>
                                    <div id={`${ID}__form__qty`}
                                         className="input-group input-group-lg">
                                        <button type="button"
                                                className="input-group-text btn fw-bold"
                                                onClick={() => {
                                                    if (stateFormQty > 1) {
                                                        setFormQty(stateFormQty - 1);
                                                    }
                                                }}
                                                disabled={stateFormQty <= 1}>
                                            -
                                        </button>
                                        <input type="text" min={1} max={QTY_MAX}
                                               value={stateFormQty}
                                               className="form-control border-0 p-0 bg-transparent text-center fs-1 pe-none user-select-none"
                                               style={{maxWidth: '1em'}}
                                               readOnly={true} aria-readonly={true} aria-label="option - quantity"/>
                                        <button type="button"
                                                className="input-group-text btn fw-bold"
                                                onClick={() => {
                                                    if (stateFormQty < QTY_MAX) {
                                                        setFormQty(stateFormQty + 1);
                                                    }
                                                }}
                                                disabled={stateFormQty >= QTY_MAX}>
                                            +
                                        </button>
                                    </div>
                                    <div id={`${ID}__form__price`}>
                                        {`$${PRICE}`}
                                    </div>
                                    <button type="button"
                                            id={`${ID}__form__button`}
                                            className="btn btn-primary btn-lg"
                                            onClick={() => {
                                                if (stateFormQty + stateCartQty > QTY_MAX) {
                                                    setCartQty(QTY_MAX);
                                                } else {
                                                    setCartQty(stateCartQty + stateFormQty);
                                                }
                                            }}>
                                        add to cart
                                    </button>
                                    <p id={`${ID}__form__status`}>
                                        {
                                            stateCartQty > 0 ?
                                                `Added ${stateCartQty} to your cart!` :
                                                null
                                        }
                                        <br/>
                                        {
                                            stateCartQty >= QTY_MAX ?
                                                `Max ${QTY_MAX} allowed.` :
                                                null
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default SectionBook
