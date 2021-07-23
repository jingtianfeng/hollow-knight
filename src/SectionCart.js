function SectionCart() {
    return (
        <div id="cart" className="offcanvas offcanvas-end"
             data-bs-backdrop="false" data-bs-scroll="true"
             aria-hidden="true" aria-labelledby="cart" tabIndex="-1">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title">
                    Cart
                </h2>
                <button type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="close"/>
            </div>
            <div className="offcanvas-body">
                Your cart is empty.
                <button className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#checkout"
                        data-bs-dismiss="offcanvas">
                    checkout
                </button>
            </div>
        </div>
    )
}

export default SectionCart
