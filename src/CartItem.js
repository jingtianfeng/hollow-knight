function CartItem({MAP_BOOK}) {
    let stateBookQty = MAP_BOOK.get("stateBookQtyCart");
    let setBookQty = MAP_BOOK.get("setBookQtyCart");
    
    return (
        <div className="row position-relative pt-4 pb-2 pe-4">
            <div className="col col-4">
                <img src={MAP_BOOK.get("IMAGES")[0].src} alt={`book - ${MAP_BOOK.get("TITLE")}`}
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
                    {MAP_BOOK.get("TITLE")}
                </h3>
                <div className="row row-cols-auto align-items-center justify-content-between">
                    <div className="col"
                         style={{marginLeft: '-1rem'}}>
                        <div className="input-group input-group-lg">
                            <button type="button"
                                    className="input-group-text btn fw-bold"
                                    onClick={() => setBookQty(stateBookQty - 1)}
                                    disabled={stateBookQty <= 1}>
                                -
                            </button>
                            <input type="text" min={1} max={MAP_BOOK.get("QTY_MAX")}
                                   value={stateBookQty}
                                   className="form-control border-0 p-0 bg-transparent text-center fs-1 pe-none user-select-none"
                                   style={{maxWidth: '1em'}}
                                   readOnly={true} aria-readonly={true} aria-label="option - quantity"/>
                            <button type="button"
                                    className="input-group-text btn fw-bold"
                                    onClick={() => setBookQty(stateBookQty + 1)}
                                    disabled={stateBookQty >= MAP_BOOK.get("QTY_MAX")}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <span className="fs-3">
                            {`${MAP_BOOK.get("PRICE")}$`}
                        </span>
                    </div>
                </div>
            </div>
            <button type="button"
                    className="btn-close position-absolute"
                    style={{top: 20, right: 30}}
                    aria-label="delete cart item"
                    onClick={() => setBookQty(0)}/>
        </div>
    )
}

export default CartItem
