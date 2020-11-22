import {Switch, Route, Redirect} from 'react-router-dom';
import {ShippingContainer} from "./components/Shipping/ShippingContainer";
import {CartsContainer} from "./components/Carts/CartsContainer";

export const AppRoutes =() => {
    return(
        <Switch>
            <Route exact path='/cart' component = {()=> <CartsContainer />} />
            <Route exact path='/shipping' component = {()=> <ShippingContainer />} />
            <Route exact path='/' render = {()=> <Redirect to={"/cart"}/>} />
            <Route path='*'
                   render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    );
};