const ChangeQuantity =({quantity, setQuantity}) =>{

    const addQuantity = () =>{
        const newQuantity = quantity+1;
    setQuantity(newQuantity)
    }

    const removeQuantity = () =>{
        if (quantity <=1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(<div>
        <button className="plusMinus" onClick={addQuantity}><img className="btn" src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-add-100-most-used-icons-flaticons-flat-flat-icons-2.png" alt="icon" /></button>
        <span>{quantity}</span>
        <button className="plusMinus"onClick={removeQuantity}><img className="btn" src="https://img.icons8.com/fluency/512/minus.png"alt="icon"/></button>
    </div>)
} 
export default ChangeQuantity;