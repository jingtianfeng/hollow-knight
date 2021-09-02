import CartItem from "./CartItem";

function SectionCart({arrBook}) {
    return (
        <div id="cart"
             className="offcanvas offcanvas-end"
             data-bs-backdrop="false" data-bs-scroll="true"
             aria-labelledby="cart__header__title"
             aria-hidden="true" tabIndex="-1">
            <div id="cart__header"
                 className="offcanvas-header">
                <h2 id="cart__header__title"
                    className="offcanvas-title">
                    Cart
                </h2>
                <button type="button"
                        id="cart__header__close"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="close"/>
            </div>
            <div id="cart__body"
                 className="offcanvas-body">
                <ul id="cart__body__items"
                    className="list-group">
                    {arrBook.map((bookObj, cartItemIdx) => {
                        return (
                            <li key={cartItemIdx}
                                className="list-group-item bg-dark">
                                <CartItem book={bookObj}/>
                            </li>
                        );
                    })}
                </ul>
                <div className="row row-cols-auto justify-content-between">
                    <span className="col">
                        Subtotal:
                    </span>
                    <span className="col">
                        $
                        {arrBook.reduce((acc, bookObj) => {
                            return acc + bookObj.stateCartQty * bookObj.PRICE;
                        }, 0)}
                    </span>
                </div>
                <button type="button"
                        id="cart__body__checkout"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#checkout"
                        data-bs-dismiss="offcanvas">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default SectionCart;
