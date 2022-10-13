import React, {useEffect, useRef, useState} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./cartStyles.scss"
import CartCard from "./cart-card/CartCard";


const Cart = () => {

    const [getSum, setSum] = useState()
    const [cartItem, setCardItem] = useState([])
    const [length, setLength] = useState(0);


    const format = (num) => {
        new Intl.NumberFormat('ru-RU').format(num)
    };

    useEffect(() => {
        parseStorageToArray()
        setLength(Number(localStorage.length))
    },[]);

    const onChange=()=>{
        setLength(Number(localStorage.length))
        parseStorageToArray();
    }

    const parseStorageToArray = () => {
        let cartItems = [];
        let sum =0;
        let keys = Object.keys(localStorage)
        for (let key of keys) {
            cartItems.push(JSON.parse(localStorage.getItem(key)))
        }
        sum =(cartItems.map(o => +(o[3] * o[4])).reduce((a, b) => a + b))
        setSum(sum.toLocaleString('ru'))
        setCardItem(cartItems)
    }

    return (
        <div className="body container">
            <Header props ={length}/>
            <p>Корзина</p>
            <div className="cart-body">

                {localStorage.length > 0 ?
                    <div>
                        {cartItem.map(item =>
                            <CartCard key={item[0]} data={item} onChange={onChange}/>
                        )}
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
                        <p className='sum'>₽ {getSum} </p>
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