
import './App.css';
import Cart from './Component/Cart/Cart';
import AllCategories from './Component/Filter/AllCategories';
import Plants from './Component/Plants Component/Plants';

function App() {
  return (
    <div className='App'>
      <div className='block'>
       <AllCategories/>
      <Cart/> 
      </div>
      <div className='block'>
      <Plants/>
      </div>
    </div>
  );
}

export default App;
