import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlices";

const Cart =() =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div className="center">
        <div>
            <h3>Total: ${totalPrice}</h3>
        </div>
        <div>
            <img className="cartIcon" alt="cart" src="https://img.icons8.com/officel/512/shopping-cart.png"/>
        </div>
        <div>
            {cartItems.map(cartItem =><CartItem cartItem = {cartItem}/> )}
        </div>
            </div> )
}

export default Cart;