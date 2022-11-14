import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/plantsSlices";

const Filter = ({category}) =>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return<div className="center">
        <p onClick={()=> {dispatch(filterCategory(category))}}className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</p>
    </div>
}

export default Filter;