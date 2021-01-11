import React from 'react';
import BookCard from './BookCard';

const BookList = ({books, addBookToCart, cartItems}) =>(
	<div className="book-list">
		{books.length > 0 && 
			<React.Fragment>
			{books.map(book =>
				<BookCard  
					key={book.isbn}
				 	book={book} 
				 	addBookToCart={addBookToCart}
				 	cartItems={cartItems}
				/>
			)}
			</React.Fragment>
		}
		{books.length === 0 &&
			<h3>Aucun livre n'a été trouvé</h3>
		}
	</div>
)

export default BookList;