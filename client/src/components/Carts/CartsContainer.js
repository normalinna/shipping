import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCart, actions} from '../../store/cart-reducer';
import {Carts} from "./Carts";
import {useHistory} from "react-router-dom";

export const CartsContainer = () => {
    const isFetching = useSelector(state => state.cart.isFetching);
    const allCart = useSelector(state => state.cart.cart);
    const amount = useSelector(state => state.cart.amount);
    const dispatch = useDispatch();
    const history = useHistory();

    const onDecrement = (cartId) => {
        dispatch(actions.decreaseCount(cartId));
        dispatch(actions.getTotal());
    }

    const onIncrement = (cartId) => {
        dispatch(actions.increaseCount(cartId));
        dispatch(actions.getTotal());
    }

    const onRemoveCountCart = (cartId) => {
        dispatch(actions.setNullCount(cartId));
        dispatch(actions.getTotal());
    }

    const onChangeValueSelect = () => {
        dispatch(actions.onChangeValueSelectCondition());
        history.push('/shipping');
    }

    const changeInputCount =(e, cartId) => {
        let valueCount = e.target.value;
        dispatch(actions.onChangeValueCount(valueCount, cartId));
        dispatch(actions.getTotal());
    }

    useEffect(()=> {
        dispatch(getAllCart());
    },[dispatch])

    return (
        <div>
            {isFetching  && allCart ? <div>Loading...</div> :  <Carts
                                                                allCart ={allCart}
                                                                amount={amount}
                                                                onDecrement={onDecrement}
                                                                onIncrement={onIncrement}
                                                                changeInputCount={changeInputCount}
                                                                onRemoveCountCart={onRemoveCountCart}
                                                                onChangeValueSelect={onChangeValueSelect}
                                                            /> }
        </div>
    )
}
