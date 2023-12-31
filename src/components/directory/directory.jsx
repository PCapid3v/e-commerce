import CategoryItem from '../category-item/Category-item';

import './Directory.css';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
    
    {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
        ))}
        
  </div>
);
};
    

export default Directory;