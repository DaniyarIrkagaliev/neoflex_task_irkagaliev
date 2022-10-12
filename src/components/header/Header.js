import React from 'react';
import "./headerStyles.scss";

const Header = () => {
    const imgCart = "/img/icons/cart.png"
    const imgFav = "/img/icons/fav.png"
    return (
        <div className='header-body'>
            <a className='header-brand' href='/'>
                QPICK
            </a>
            <div className="header-section">
                <div >
                    <a href="/">
                        <div className="fav">
                            <img src={imgFav}/>
                            <span className="count_circle">2</span>
                        </div>
                    </a>

                </div>
                <div>
                    <a href="/cart">
                        <img src={imgCart}/>
                        {localStorage.length > 0 &&
                            <span className="count_circle">{localStorage.length}</span>
                        }
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;