import OptionQuantity from "./OptionQuantity";

function CartItem({MAP_BOOK}) {
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
                        <OptionQuantity max={MAP_BOOK.get("QTY_MAX")}/>
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
                    aria-label="delete cart item"/>
        </div>
    )
}

export default CartItem
