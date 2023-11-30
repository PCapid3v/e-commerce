import { useContext } from 'react';
import ProductCard from '../product-card/product-card';
import { ProductContext } from '../../context/products';

import './Shop.css';

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      {products.map((category) => (
        <div key={category.title}>
          <h1>{category.title}</h1>
          <div className='products-container'>
            {category.items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;