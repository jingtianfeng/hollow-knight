import hrTop from "./img/hr2.png";
import hrBottom from "./img/hr-bottom.png";
import marker from "./img/marker3.png";

function SectionBook({arrBook}) {
    return (
        <section id="section-book"
                 className="pt-6 pb-7 border-bottom">
            <div className="container">
                <h2 className="text-center">
                    Books
                </h2>
                <img src={marker} alt="divider"
                     className="d-block mx-auto"
                     style={{width: 24, height: 24, opacity: 0.875}}/>
                <p className="mt-2 text-center">
                    (placeholder)
                </p>
                {
                    arrBook.map((
                        {
                            ID, TITLE, QTY_MAX, PRICE, IMAGES, DESCRIPTION,
                            stateCartQty, setCartQty,
                            stateFormQty, setFormQty
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
                                                            className={`rounded-circle ${imgIdx === 0 ? "active" : ""}`}
                                                            data-bs-target={`#${ID}__carousel`}
                                                            data-bs-slide-to={imgIdx}
                                                            aria-label={`slide ${imgIdx + 1}`}
                                                            aria-current={imgIdx === 0}/>
                                                );
                                            })}
                                        </div>
                                        <div className="carousel-inner">
                                            {IMAGES.map((imgObj, imgIdx) => {
                                                return (
                                                    <div key={imgIdx}
                                                         className={`carousel-item ${imgIdx === 0 ? "active" : ""}`}>
                                                        <img src={imgObj.src} alt={imgObj.alt}
                                                             height="auto" width="600"
                                                             className="d-block w-100"/>
                                                    </div>
                                                );
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
                                    <div id={`${ID}__form__options`}
                                         className="d-flex align-items-center justify-content-between">
                                        <div id={`${ID}__form__options__qty`}
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
                                                   style={{maxWidth: "1em"}}
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
                                        <div id={`${ID}__form__options__price`}
                                             className="px-3 fs-1">
                                            {`$${PRICE}`}
                                        </div>
                                    </div>
                                    <div id={`${ID}__form__add`}
                                         className="d-flex align-items-center justify-content-between">
                                        <button type="button"
                                                id={`${ID}__form__add__button`}
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    if (stateFormQty + stateCartQty > QTY_MAX) {
                                                        setCartQty(QTY_MAX);
                                                    } else {
                                                        setCartQty(stateCartQty + stateFormQty);
                                                    }
                                                }}
                                                disabled={stateCartQty >= QTY_MAX}>
                                            {
                                                stateCartQty < QTY_MAX ?
                                                    "Add to cart" :
                                                    `Max ${QTY_MAX} allowed`
                                            }
                                        </button>
                                        {
                                            stateCartQty > 0 ?
                                                <div role="alert" id={`${ID}__form__add__status`}
                                                     className="alert d-flex align-items-center m-0">
                                                    <svg x="0px" y="0px"
                                                         className="me-2"
                                                         width="48px" height="48px" viewBox="0 0 48 48"
                                                         style={{width: "2rem", height: "2rem"}}>
                                                        <g transform="translate(0, 0)">
                                                            <path fill="#B3B3B3"
                                                                  d="M22,45C10.4209,45,1,35.57959,1,24S10.4209,3,22,3c3.91211,0,7.72852,1.08301,11.03809,3.13184 c0.46973,0.29053,0.61426,0.90674,0.32422,1.37646c-0.29102,0.47021-0.90723,0.61426-1.37695,0.32373 C28.99219,5.97949,25.54004,5,22,5C11.52344,5,3,13.52344,3,24s8.52344,19,19,19s19-8.52344,19-19 c0-1.69238-0.22266-3.37207-0.66211-4.99268c-0.14453-0.5332,0.16992-1.08252,0.70312-1.22705 c0.53418-0.14209,1.08301,0.1709,1.22656,0.70361C42.75391,20.2749,43,22.13086,43,24C43,35.57959,33.5791,45,22,45z"/>
                                                            <path fill="#72C472"
                                                                  d="M22,29c-0.25586,0-0.51172-0.09766-0.70703-0.29297l-8-8c-0.39062-0.39062-0.39062-1.02344,0-1.41406 s1.02344-0.39062,1.41406,0L22,26.58594L43.29297,5.29297c0.39062-0.39062,1.02344-0.39062,1.41406,0s0.39062,1.02344,0,1.41406 l-22,22C22.51172,28.90234,22.25586,29,22,29z">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                    <div style={{fontSize: "0.75rem", lineHeight: 1.25}}>
                                                        Added {stateCartQty} <br/> to your cart!
                                                    </div>
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}

export default SectionBook;
