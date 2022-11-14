import Filter from './Filter'

const AllCategories =() =>{
    return(<div className='center'>
        <h1>What are you going to plant?</h1>
        {['TREES', 'SHRUBS', 'BULBS', 'GRASS', 'ALL']
        .map((category, index) => <Filter key={index} category = {category}/>)}
        
        </div>)
}

export default AllCategories;