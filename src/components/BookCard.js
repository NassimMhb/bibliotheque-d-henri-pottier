import React from 'react';


const BookCard = ({book, addBookToCart, cartItems}) =>{
	let doesBookExistInCart = cartItems.filter(item=> item.isbn === book.isbn).length > 0;
	return(
		<div className="book-list-item">
			<img src={book.cover} alt={book.name}/>
			<p>{book.title}</p>
			<p className="book-price">{book.price} <i className="fas fa-euro-sign"></i></p>
			<button 
				onClick={()=>addBookToCart(book)} 
				className={`cart-button ${doesBookExistInCart? 'in-cart':''}`}
			>
				{doesBookExistInCart? <span><i className="fas fa-check"></i> Ajouté</span>: <span>Ajouter au panier</span>}
			</button>
		</div>
	);
	

}

export default BookCard;