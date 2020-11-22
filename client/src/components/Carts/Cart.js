import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Cart.css';

library.add(faTrashAlt);

export const Cart = (props) => {
    const {count} = props.cart;

    return(
        <div className="item">
            <div className="item-img">
                <img src={props.cart.img_src} alt={props.cart.title}/>
            </div>
            <div className="item-description">
                <h3 className="item-description__h3">{props.cart.title}</h3>
                <p className="item-description__p">{props.cart.description}</p>
            </div>
            <div className="item-navigation">
                <div className="item-navigation__top" onClick={()=> {props.onRemoveCountCart(props.cart.id)}}>
                    <FontAwesomeIcon icon="trash-alt" size="1x" color="grey" ></FontAwesomeIcon>
                </div>

                <div className="item-navigation__bottom">
                    <div className="item-navigation__bottom-left">
                        <button className="btn item-navigation__bottom-btn"
                                onClick={() => props.onIncrement(props.cart.id)}
                                disabled={count < 1}
                        >-</button>
                        <input value={count} type="number" onChange={(e)=>{props.changeInputCount(e,props.cart.id)}}/>
                        <button className="btn item-navigation__bottom-btn"
                                onClick={() => props.onDecrement(props.cart.id)}
                                disabled={count > 49}
                        >+</button>
                    </div>

                    <p className="item-navigation__bottom-right__p">{props.cart.price}€</p>
                </div>

            </div>
        </div>
    )
}