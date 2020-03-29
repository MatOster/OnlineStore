import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../assets/original.svg'
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions' 
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon = ({toggleCartHidd,itemCount }) =>(
    <div className = 'cart-icon' onClick = {toggleCartHidd}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className='item-count'> {itemCount}</span>

    </div>
);
const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
});
const mapDispatchToState  = (dispatch) => (
    {
    
    toggleCartHidd:()=> dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToState)(CartIcon);