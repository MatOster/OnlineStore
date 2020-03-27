import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../assets/original.svg'
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions' 
const CartIcon = ({toggleCartHidd }) =>(
    <div className = 'cart-icon' onClick = {toggleCartHidd}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className='item-count'> 0</span>

    </div>
);
const mapDispatchToState  = (dispatch) => (
    console.log('I in first'),
    {
    
    toggleCartHidd:()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToState)(CartIcon);