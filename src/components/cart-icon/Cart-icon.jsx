import  ShoppingIcon from '../../assets/images/shopping-bag.svg';
import './Cart-icon.css'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <img src={ShoppingIcon} className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
