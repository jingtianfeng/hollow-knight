import OptionQuantity from "./OptionQuantity";

function CartItem({imgSrc, title, qtyMax, priceEach}) {
    return (
        <div className="row position-relative pt-4 pb-2 pe-4">
            <div className="col col-4">
                <img src={imgSrc} alt={`book - ${title}`}
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
                    {title}
                </h3>
                <div className="row row-cols-auto align-items-center justify-content-between">
                    <div className="col"
                         style={{marginLeft: '-1rem'}}>
                        <OptionQuantity max={qtyMax}/>
                    </div>
                    <div className="col">
                        <span className="fs-3">
                            {`${priceEach}$`}
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
