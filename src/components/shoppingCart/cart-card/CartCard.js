import React, {useState} from 'react';
import "./cartCardStyles.scss"

const CartCard = (props) => {

    const [update, setUpdate] = useState(0)

    const deleteFromCart = () => {
        localStorage.removeItem(props.data[0])
        setUpdate(update + 1)
        props.onChange()
    }

    const addOne = () => {
        let count = props.data[4] += 1;
        let array =
            [props.data[0], props.data[1], props.data[2], props.data[3], count];
        localStorage.setItem(props.data[0], JSON.stringify(array));
        setUpdate(update + 1)
        props.onChange()
    }

    const deleteOne = () => {
        if (props.data[4] > 0) {
            let count = props.data[4] -= 1;
            let array =
                [props.data[0], props.data[1], props.data[2], props.data[3], count];
            localStorage.setItem(props.data[0], JSON.stringify(array));
        } else {
            deleteFromCart()
        }
        setUpdate(update + 1)
        props.onChange()
    }


    return (
        <div>
            <div className='cart-card'>
                <img className="cart-card-img" src={props.data[1]} alt={props.data[2]}/>
                <div className="cart-card-info">
                    <p className='cart-card-title'>{props.data[2]}</p>
                    <p className="cart-card-price">{(props.data[3]).toLocaleString('ru')} ₽</p>
                </div>
                <div className="bottom-counter">
                    <div className="ellipse" onClick={deleteOne}>-</div>
                    <p>{props.data[4]}</p>

                    <div className="ellipse" onClick={addOne}>+</div>

                    <div className="total-price">{(props.data[3] * props.data[4]).toLocaleString('ru')} ₽</div>
                </div>

                <span className="trash-can">
                    <img src='/img/icons/trash.png' onClick={deleteFromCart}/>
                </span>
            </div>
        </div>
    );
};

export default CartCard;