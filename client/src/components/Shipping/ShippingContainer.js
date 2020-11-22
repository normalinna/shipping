import React from 'react';
import Shipping from "./Shipping";
import {actions} from '../../store/cart-reducer';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const ShippingContainer = () => {
    const selectValue = useSelector(state => state.cart.valuesShipping);
    const history = useHistory();
    const dispatch = useDispatch();

    const submitForm = () => {
        dispatch(actions.setNullAmount());
        history.push('/cart');
    };

    return (
        <div className="content">
            <Shipping selectValue={selectValue}
                      submitForm={submitForm}/>
        </div>
    )
}