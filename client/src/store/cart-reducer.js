const axios = require('axios');

let initialState = {
    cart: [],
    isFetching: true,
    amount: 0,
    valuesShipping: ['Free shipping', 'Express shipping - 9.99$', 'Courier shipping - additional 19.99 €','Free express shipping']
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET/CART':
            return {
                ...state,
                cart: action.cart
            }
        case 'DECREASE/CART/COUNT':
            let temp = state.cart.map(c=>{
                if (c.id === action.cartId) {
                 c = {...c, count: +c.count + 1, total: ((c.count + 1) * c.price).toFixed(2)}
                }
                return c;
            })
            return {...state, cart:temp}
        case 'INCREASE/CART/COUNT':
            let tmp = state.cart.map(c=>{
                if (c.id === action.cartId) {
                    c = {...c, count: +c.count - 1, total: ((c.count - 1) * c.price).toFixed(2)}
                }
                return c;
            })
            return {...state, cart:tmp}
        case 'DEFAULT/CART/COUNT':
            let tm = state.cart.map(c=>{
                if (c.id === action.cartId) {
                    c = {...c, count: 0, total: 0}
                }
                return c;
            })
            return {...state, cart:tm}
        case 'GET/AMOUNT':
            let {total,amount} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const {total} = cartItem;
                    cartTotal.total += Number(cartItem.total);
                    cartTotal.amount += Number(total);
                    return cartTotal;
                }, {
                    total: 0,
                    amount: 0
                }
            );
            total = total.toFixed(2);
            amount = amount.toFixed(2);
            return {...state, total,amount}
        case 'SET/NULL/AMOUNT':
            return {
                ...state, amount: 0
            }
        case 'SET/ISFETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SET/VALUE/SHIPPING':
            let tmpValue = state.valuesShipping.slice();
            if(state.amount < 300) {
                tmpValue.pop()
            }
            return {
                ...state, valuesShipping: tmpValue
            }
        case 'CHANGE/VALUE/COUNT':
            let tmpCount = state.cart.map(c=>{
                if (c.id === action.cartId) {
                    c = {...c, count: (action.valueCount > 49 || action.valueCount < 0 ? c.count : action.valueCount),
                        total: ((action.valueCount) * c.price).toFixed(2)}
                }
                return c;
            })
            return {...state, cart:tmpCount}
        default:
            return state;
    }
}

export const actions = {
    setCart: (cart) => ({type: 'SET/CART', cart }),
    toggleIsFetching: (isFetching) => ({ type: 'SET/ISFETCHING', isFetching }),
    decreaseCount: (cartId) => ({ type: 'DECREASE/CART/COUNT', cartId}),
    increaseCount: (cartId) => ({ type: 'INCREASE/CART/COUNT', cartId}),
    setNullCount: (cartId) => ({ type: 'DEFAULT/CART/COUNT', cartId}),
    getTotal: () => ({ type: 'GET/AMOUNT'}),
    setNullAmount: () => ({ type: 'SET/NULL/AMOUNT'}),
    onChangeValueSelectCondition: ()=>({ type: 'SET/VALUE/SHIPPING'}),
    onChangeValueCount: (valueCount, cartId)=>({ type: 'CHANGE/VALUE/COUNT', valueCount, cartId})
}

export const getAllCart = () => {
    return async (dispatch) => {
        await axios.get('https://5fb52209e473ab0016a177fb.mockapi.io/book')
            .then(response => {
                let res = response.data.map(function (item){
                    return {...item, total: 0, count: 0}
                });
                dispatch(actions.setCart(res));
                dispatch(actions.toggleIsFetching(false));
            }).catch(err=> {
                console.log(err);
            });
    }
}