import React, {useState} from 'react';
import "./cardStyles.scss";

const Card = (props) => {

    const addToCart = () => {

        if (localStorage.hasOwnProperty(props.data.id)) {
            console.log(localStorage.getItem(props.data.id))
            props.data.count+=1
            let array =
                [props.data.id, props.data.image, props.data.title, props.data.curPrice, props.data.count];
            localStorage.setItem(props.data.id, JSON.stringify(array));
        }else{
            let array = [props.data.id, props.data.image, props.data.title, props.data.curPrice, props.data.count];
            localStorage.setItem(props.data.id, JSON.stringify(array));
            console.log(localStorage.getItem(props.data.id))
        }

    }

    return (
        <div className="card-body">
            <div className='card-img'>
                <img src={props.data.image} alt={props.data.title}/>
            </div>
            <div className='card-info'>
                <div className='card-row'>
                    <span className='card-title'>{props.data.title}</span>
                    <span className='card-price'>{props.data.curPrice} ₽</span>

                </div>
                <div className='card-row'>
                <span className='card-rate'>
                    <span>
                        <img src='/img/icons/star.png'/>
                    </span>
                    {props.data.rate}</span>
                    <a className='buy-text' onClick={addToCart}>Купить</a>
                </div>
            </div>
        </div>
    );
};

export default Card;