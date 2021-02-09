import React from 'react'

function Header() {
    return (
        <div className="header">
            <img src="hhttps://www.logoground.com/uploads9/dv9y202052152020-08-013894275Monstera%20plant%20logo-1.jpg" alt="monstera logo" className="header__logo"/>

            <div className="header__search">
                <input type="text"/>
                {/* logo */}

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

            </div>
            
        </div>
    )
}

export default Header
