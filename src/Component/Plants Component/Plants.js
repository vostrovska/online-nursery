
import dataPlants from '../../data/dataPlants';
import Plant from './Plant';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/plantsSlices";

const Plants = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(<div >
        {dataPlants
        .filter(plant => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === plant.category;
        })
        .map((plant, index)  => <Plant key={index} plant  ={plant}/>)}
    </div>)
}

export default Plants;