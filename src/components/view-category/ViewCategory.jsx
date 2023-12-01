// Import necessary dependencies

import { useNavigate, useParams } from 'react-router-dom';
import SHOP_DATA from '../../shop-data';
import ProductCard from '../../components/product-card/Product-card.jsx';

const ViewCategory = () => {
  // Get the category parameter from the route
  const { category } = useParams();
  const navigate = useNavigate();

  // Find the category data from SHOP_DATA based on the parameter
  const selectedCategory = SHOP_DATA.find((cat) => cat.title.toLowerCase() === category.toLowerCase());

  return (
    <>
    <div>
      <h2>{selectedCategory.title}</h2>
      <div className='directory-container'>
        {selectedCategory.items.map((item) => (
            <ProductCard key={item.id} product={item} />
            ))}
      </div>
    </div>
    <button className='goBackBtn viewBtn' onClick={() => navigate('/')}>Go Back</button>
    </>
  );
};

export default ViewCategory;
