import categories from './data.js'
import CategoryItem from './components/category-item/category-item.jsx'

function App() {
  
    return (
      <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default App
