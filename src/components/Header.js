import React from 'react';

class Header extends React.Component{
	render(){
		let {keyword, 
			handleSearchChange, 
			cartCount, 
			handleCartOpen, 
			handleBackClick, 
			handleSearchSubmit} = this.props;
		return(
			<header className="header">
				<div className="main-title"><h1><i className="fas fa-book-open"></i> La bibliothèque d'Henri Pottier</h1></div>
				<div className={`search-form-container`}>
					<div 
						className={`back-button`}
						onClick={handleBackClick}
					>
						<i className="fas fa-chevron-left"></i>
					</div>
					<form className="search-form" onSubmit={(e)=>handleSearchSubmit(e)}>
						<input type="text" value={keyword} placeholder="Effectuer une recherche..."  onChange={(e)=>handleSearchChange(e)}/>
					</form>
				</div>
				<div className="cart">
					<i className="fas fa-shopping-cart cart-icon" onClick={handleCartOpen} >
						<span className="cart-count">{cartCount}</span>
					</i>

				</div>
			</header>
		)
	}
}

export default Header;