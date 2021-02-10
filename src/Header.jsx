import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img src="https://image.freepik.com/free-vector/monstera-deliciosa-deliciousa-leaf-logo_7688-802.jpg" alt="monstera logo" className="header__logo"/>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
                

            </div>


            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">hello user</span>
                    <span className="header__optionLineTwo">Signin</span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>
            
        </div>
    )
}

export default Header
