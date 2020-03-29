import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/logo.svg'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, hidden})=>(
    <div className = 'header'>
        <Link className='logo-container' to ='/'>
            <Logo></Logo>
        </Link>
    
    <div className = 'options'>
        <Link className = 'option' to  ='/shop'>
            SHOP
        </Link>
        <Link className = 'option' to  ='/contact'>
            Contact
        </Link>
        {
            currentUser ?
            <div className = 'option' onClick={()=> auth.signOut()}>Sign Out</div>
            :
        
        <Link className = 'option' to  ='/signin'>
            Sign In
        </Link>
        }
        <CartIcon/>
    </div>
    {hidden ? null :<CartDropdown/>}
    </div>
);
const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)