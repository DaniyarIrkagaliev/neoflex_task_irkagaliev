import React from 'react';
import "./headerStyles.scss";

const Header = (length) => {
    const imgCart = "/img/icons/cart.png"
    const imgFav = "/img/icons/fav.png"
    return (
        <div className='header-body'>
            <a className='header-brand' href='/'>
                QPICK
            </a>
            <div className="header-section">
                <div className='fav'>

                    <div className="element-box">
                        <a href="/">
                            <img src={imgFav}/>
                            <div className="count_circle">2</div>
                        </a>
                    </div>
                </div>

                <div className='element-box'>
                    <a href="/cart">
                        <img src={imgCart}/>
                        {localStorage.length > 0 &&
                            <div className="count_circle">{length.props}</div>
                        }
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;