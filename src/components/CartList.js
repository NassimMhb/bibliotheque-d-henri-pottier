import React from 'react';
import CartCard from './CartCard';

const CartList = ({
		cartItems,
		cartTotal,
		cartDiscount,
		removeBookFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity
	}) =>{
	return(
		<div className="cart-list">
			<React.Fragment>
				<div className="cart-details">
					<p>Article(s): {cartItems.length}</p>
					{cartTotal > 0 &&
						<p className="cart-total">Réduction: {cartDiscount} <i className="fas fa-euro-sign"></i></p>
					}
					{cartTotal > 0 ?
					<p className="cart-total">Total: {cartTotal - cartDiscount} <i className="fas fa-euro-sign"></i></p>
					:
					<p className="cart-total">Total: {cartTotal} <i className="fas fa-euro-sign"></i></p>
				}
				</div>
				<hr />
				{cartItems.map(item=>(
					<CartCard 
						key={`cart-${item.isbn}`} 
						item={item}
						removeBookFromCart={removeBookFromCart}
						handleIncreaseQuantity={handleIncreaseQuantity}
						handleDecreaseQuantity={handleDecreaseQuantity}
					/>
				))}
				{cartItems.length === 0 &&
					<h3>Votre panier est vide</h3>
				}
			</React.Fragment>
		</div>
	);
}

export default CartList;