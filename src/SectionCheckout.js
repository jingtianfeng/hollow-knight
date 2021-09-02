function SectionCheckout() {
    return (
        <div id="checkout" className="modal fade"
             aria-hidden="true" aria-labelledby="checkout" tabIndex="-1">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">
                            Checkout
                        </h2>
                        <button type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        Hide this modal and show the first with the button below.
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#cart"
                                data-bs-dismiss="modal">
                            back to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCheckout;
