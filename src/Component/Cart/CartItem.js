import dataPlants from "../../data/dataPlants";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlices";

const CartItem =({cartItem})=>{

    const plants = dataPlants.find(item =>item.id === cartItem.plantId)
    const dispatch = useDispatch();

    return(<div className="center">
        <p>{plants.name}</p>
       <p> {cartItem.quantity} item(s) </p>
       <p> Price: ${plants.price * cartItem.quantity}</p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/>
       </span>
       
    </div>)
}
export default CartItem;