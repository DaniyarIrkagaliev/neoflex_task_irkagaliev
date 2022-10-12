import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./cartStyles.scss"
import CartCard from "./cart-card/CartCard";


const Cart = () => {

    // const [ignored, forceUpdate] = useReducer(x => x+1, 0);

    let sum = 0;
    const cartItem = [];

    const parseStorageToArray = () => {
        let keys = Object.keys(localStorage)
        for (let key of keys) {
            cartItem.push(JSON.parse(localStorage.getItem(key)))
            console.log(localStorage.getItem(key))
        }
        sum = cartItem.map(o => +(o[3] * o[4])).reduce((a, b) => a + b)
    }

    return (
        <div className="body container">
            <Header/>
            <p>Корзина</p>
            <div className="cart-body">

                {localStorage.length > 0 ?
                    <div>
                        {parseStorageToArray()
                        }
                        {cartItem.map(item =>
                            <CartCard key={item[0]} data={item}/>
                        )
                        }
                    </div>
                    :
                    <div className="empty-cart">
                        <h2>
                            В корзине еще нет товаров.
                        </h2>
                        <p>
                            Может пора что-то купить?
                        </p>
                    </div>
                }
                <div className="total">
                    <div className="total-text-body">
                        <p className='total-text'>Итого</p>
                        <p className='sum'>₽ {sum} </p>
                    </div>
                    <button>
                        <p className="buy-btn-text">Перейти к оформлению</p>
                    </button>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Cart;