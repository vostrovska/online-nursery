import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlices";

const Plant = ({plant}) =>{
    const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

    return(<div>
        <img src={`./${plant.img}.jpg`} alt="plants"/>
        <h2>{plant.name}</h2>
        <p>${plant.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="Add" onClick={()=> {dispatch(addItemToCart({plant, quantity}))}}>Add to Cart</button>
    </div>)
}

export default Plant;