import React, { Component } from 'react';

import Header from './Header';
import BookList from './BookList';
import CartList from './CartList';
import './App.css';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      cart: [],
      cartTotal: 0,
      cartDiscount: 15,
      openCart: false,
      books: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addBookToCart = this.addBookToCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.removeBookFromCart = this.removeBookFromCart.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  fetchBooks(){
    fetch(`https://henri-potier.techx.fr/books`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data,
        })
      )
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchBooks();
  }

  handleSearchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()

    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
  }
  handleBackClick(){
    this.setState({
      keyword: '',
    })
  }
  addBookToCart(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let doesBookExist = cartItems.filter(item=> item.isbn=== book.isbn).length > 0;
    if(!doesBookExist){
      cartItems.push({...book, quantity: 1});
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal += book.price,
      });
    }
  }
  removeBookFromCart(book){
    let cartItems=  this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    cartItems = cartItems.filter(cartItem=> cartItem.isbn !== book.isbn)
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal -= (book.price * book.quantity)
    });

  }
  handleIncreaseQuantity(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.isbn===book.isbn);
    cartItems[bookIndex].quantity += 1;
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal += book.price,
    });
  }
  handleDecreaseQuantity(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.isbn===book.isbn);
    let currentQuantity = cartItems[bookIndex].quantity;
    if(currentQuantity > 1){
      cartItems[bookIndex].quantity -= 1;
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal -= book.price,
      });
    }else{
      this.removeBookFromCart(book);
    }
  }
  handleCartOpen(){
    this.setState({
      openCart: !this.state.openCart,
    });
  }
  render() {
    let {keyword, cart, cartTotal} = this.state;
    const filteredBooks = this.state.books.filter((book)=>{
      let bookTitle = book.title.toLowerCase();
      return bookTitle.indexOf(keyword) > -1;
    });
    return (
    	<div>
    		<Header 
          handleSearchChange={this.handleSearchChange}
          cartCount={this.state.cart.length}
          handleCartOpen={this.handleCartOpen}
          keyword={keyword}
          handleBackClick = {this.handleBackClick}
          handleSearchSubmit={this.handleSearchSubmit}
        />
	    	<div className="container">
		    	<BookList books={filteredBooks}
                    addBookToCart={this.addBookToCart}
                    cartItems={cart}
         />
        <div className={`cart-container ${this.state.openCart? 'cart-open' : ''}`}>
          <CartList 
            cartItems={cart}
            cartTotal={cartTotal}
            cartDiscount={this.state.cartDiscount}
            removeBookFromCart={this.removeBookFromCart}
            handleIncreaseQuantity={this.handleIncreaseQuantity}
            handleDecreaseQuantity={this.handleDecreaseQuantity}
          />
        </div>
	     	</div>
         <Footer />
	    </div>
    );
  }
}

export default App;
