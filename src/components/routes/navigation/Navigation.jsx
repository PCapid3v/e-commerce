import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logoPC.jpg';
import CartIcon from '../../cart-icon/cart-icon';
import './Navigation.css';

function Navigation () {
  return (
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <img src={logo} alt='logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        <CartIcon />
        </div>
      </div>      
  );
}

export default Navigation;