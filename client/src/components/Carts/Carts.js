import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {Cart} from './Cart';
import './Cart.css';

library.add(faTrashAlt);

export const Carts = (props) => {
    const {amount} = props;

    const listItems = props.allCart.map((cart) =>
        <Cart key={cart.id}
              cart={cart}
              onDecrement={props.onDecrement}
              onIncrement={props.onIncrement}
              onRemoveCountCart={props.onRemoveCountCart}
              changeInputCount={props.changeInputCount}
        />
    );
    return(
        <div className="content">
            <div className="item-wrapper">
                {
                    listItems
                }
            </div>
            <div className="outcome-wrapper">
                <div className="outcome-price">
                    {amount}€
                </div>
                <button disabled={amount < 1} onClick={props.onChangeValueSelect} className="outcome-btn">
                    Buy
                </button>
            </div>
        </div>
    )
}