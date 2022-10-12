import React, {useEffect, useReducer, useState} from 'react';
import "./cartCardStyles.scss"

const CartCard = (props) => {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    const deleteFromCart = () => {
        localStorage.removeItem(props.data[0])
        console.log("удалено: " + props.data[0])
        forceUpdate();
    }

    const addOne = () => {
        let count = props.data[4] += 1;
        let array =
            [props.data[0], props.data[1], props.data[2], props.data[3], count];
        localStorage.setItem(props.data[0], JSON.stringify(array));
        console.log("добавлено: " + props.data[0])
        forceUpdate();

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
        forceUpdate();
        console.log("удалено: " + props.data[0])
    }


    return (
        <div>
            <div className='cart-card'>
                <img className="cart-card-img" src={props.data[1]} alt={props.data[2]}/>
                <div className="cart-card-info">
                    <p className='cart-card-title'>{props.data[2]}</p>
                    <p className="cart-card-price">{props.data[3]} ₽</p>
                </div>
                <div className="bottom-counter">
                    <div className="ellipse" onClick={deleteOne}>-</div>
                    <p>{props.data[4]}</p>

                    <div className="ellipse" onClick={addOne}>+</div>

                    <div className="total-price">{props.data[3] * props.data[4]} ₽</div>
                </div>

                <span className="trash-can" onClick={deleteFromCart}>
                    <img src='/img/icons/trash.png'/>
                </span>
            </div>
        </div>
    );
};

export default CartCard;