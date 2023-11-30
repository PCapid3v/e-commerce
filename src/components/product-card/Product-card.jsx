import './Product-card.css';

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, price, imageUrl } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`£ ${price}`}</span>
      </div>
      <button className='add-to-cart-button' >Add to Cart</button>
    </div>
  );
};

export default ProductCard;