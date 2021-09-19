function CartItem(
    {
        book: {
            TITLE, QTY_MAX, PRICE, IMAGES,
            stateCartQty, setCartQty
        }
    }
) {
    return (
        <div className="row position-relative pt-3 text-light">
            <div className="col col-3">
                <img src={IMAGES[0].src} alt={`book - ${TITLE}`}
                     height={100} width={100}
                     style={{
                         marginTop: -12,
                         marginLeft: -48
                     }}/>
            </div>
            <div className="col col-9">
                <h3 className="h6 fw-bold me-5 mb-1">
                    {TITLE}
                </h3>
                <div className="row row-cols-auto align-items-center justify-content-between">
                    <div className="col"
                         style={{marginLeft: "-1rem"}}>
                        <div className="input-group">
                            <button type="button"
                                    className="input-group-text btn fw-bold"
                                    onClick={() => {
                                        if (stateCartQty > 1) {
                                            setCartQty(stateCartQty - 1);
                                        }
                                    }}
                                    disabled={stateCartQty <= 1}>
                                -
                            </button>
                            <input type="text" min={1} max={QTY_MAX}
                                   value={stateCartQty}
                                   className="form-control border-0 p-0 bg-transparent text-center fs-5 pe-none user-select-none"
                                   style={{maxWidth: "1em"}}
                                   readOnly={true} aria-readonly={true} aria-label="option - quantity"/>
                            <button type="button"
                                    className="input-group-text btn fw-bold"
                                    onClick={() => {
                                        if (stateCartQty < QTY_MAX) {
                                            setCartQty(stateCartQty + 1);
                                        }
                                    }}
                                    disabled={stateCartQty >= QTY_MAX}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <span className="fs-5" style={{opacity: 0.875}}>
                            {`$${PRICE}`}
                        </span>
                    </div>
                </div>
            </div>
            <button type="button"
                    className="btn position-absolute m-0 p-0"
                    style={{
                        top: 0, right: 4,
                        width: "2rem", height: "2rem"
                    }}
                    aria-label="delete cart item"
                    onClick={() => setCartQty(0)}>
                <svg x="0px" y="0px"
                     width="16px" height="16px" viewBox="0 0 16 16">
                    <g transform="translate(0, 0)">
                        <path d="M2.5,5.5l.865,8.649A1.5,1.5,0,0,0,4.857,15.5h6.286a1.5,1.5,0,0,0,1.492-1.351L13.5,5.5"
                              fill="none" stroke="currentColor"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="0.5" y1="3.5" x2="15.5" y2="3.5"
                              fill="none" stroke="currentColor"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="5.5 3.5 5.5 0.5 10.5 0.5 10.5 3.5"
                                  fill="none" stroke="currentColor"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default CartItem;
