import {useState} from "react";

function OptionQuantity({max = 1}) {
    let [quantity, setQuantity] = useState(1);

    return (
        <div className="input-group input-group-lg">
            <button type="button"
                    className="btn input-group-text"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity <= 1}>
                -
            </button>
            <input type="number" min={1} max={max}
                   value={quantity}
                   className="form-control pe-none" style={{maxWidth: '3rem'}}
                   readOnly={true} aria-readonly={true} aria-label="option - quantity"/>
            <button type="button"
                    className="btn input-group-text"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= max}>
                +
            </button>
        </div>
    )
}

export default OptionQuantity
