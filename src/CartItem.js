function CartItem(
    {
        book: {
            TITLE, QTY_MAX, PRICE, IMAGES,
            stateCartQty, setCartQty
        }
    }
) {
    return (
        <div className="row position-relative pt-4 pb-2 pe-4">
            <div className="col col-4">
                <img src={IMAGES[0].src} alt={`book - ${TITLE}`}
                     height={100} width={100}
                     className="img-fluid"
                     style={{
                         maxHeight: 100,
                         maxWidth: 100,
                         marginTop: -8,
                     }}/>
            </div>
            <div className="col col-8">
                <h3 className="h6 fw-bold me-5 mb-1">
                    {TITLE}
                </h3>
                <div className="row row-cols-auto align-items-center justify-content-between">
                    <div className="col"
                         style={{marginLeft: '-1rem'}}>
                        <div className="input-group input-group-lg">
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
                                   className="form-control border-0 p-0 bg-transparent text-center fs-1 pe-none user-select-none"
                                   style={{maxWidth: '1em'}}
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
                        <span className="fs-3">
                            {`$${PRICE}`}
                        </span>
                    </div>
                </div>
            </div>
            <button type="button"
                    className="btn-close position-absolute"
                    style={{top: 20, right: 30}}
                    aria-label="delete cart item"
                    onClick={() => setCartQty(0)}/>
        </div>
    )
}

export default CartItem
