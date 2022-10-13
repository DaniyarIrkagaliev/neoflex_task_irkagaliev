import React, {useEffect, useState} from 'react';
import Card from "./card/Card";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./homeStyles.scss"
const Home = () => {

    // localStorage.clear()
    const headphones = [
        {
            id: 1,
            image: "/img/BYZ.png",
            title: "Apple BYZ S852I",
            curPrice: 2959,
            oldPrice: 3499,
            rate: 4.7,
            count: 1
        },
        {
            id: 2,
            image: "/img/EarPods.png",
            title: "Apple EarPods",
            curPrice: 12599,
            oldPrice: 12599,
            rate: 4.2,
            count: 1
        },
        {
            id: 3,
            image: "/img/EarPods2.png",
            title: "Apple EarPods",
            curPrice: 12599,
            oldPrice: 13999,
            rate: 4.2,
            count: 1
        },
        {
            id: 4,
            image: "/img/BYZ.png",
            title: "Apple BYZ S852I",
            curPrice: 2959,
            oldPrice: 3499,
            rate: 4.7,
            count: 1
        },
        {
            id: 5,
            image: "/img/EarPods.png",
            title: "Apple EarPods",
            curPrice: 12599,
            oldPrice: 13999,
            rate: 4.2,
            count: 1
        },
        {
            id: 6,
            image: "/img/EarPods2.png",
            title: "Apple EarPods",
            curPrice: 12599,
            oldPrice: 13999,
            rate: 4.2,
            count: 1
        },
    ]
    const tws = [
        {
            id: 7,
            image: "/img/BOROFONE.png",
            title: "BOROFONE BO4",
            curPrice: 7527,
            oldPrice: 7527,
            rate: 4.7,
            count: 1
        },
        {
            id: 8,
            image: "/img/GERLAX.png",
            title: "GERLAX GH-04",
            curPrice: 6527,
            oldPrice: 6527,
            rate: 4.7,
            count: 1
        },

        {
            id: 9,
            image: "/img/AirPods.png",
            title: "Apple AirPods",
            curPrice: 9527,
            oldPrice: 10999,
            rate: 4.7,
            count: 1
        },
    ]

    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(Number(localStorage.length))
    },[]);

    const onChange=()=>{
        setLength(Number(localStorage.length))
    }

    return (
        <div className="body container">
            <Header props ={length}/>
            <p className='list-title'>Наушники</p>
            <div className="card-list">

                {headphones.map(item =>
                    <div className="card">
                        <Card key={item.id} data={item} onChange={onChange}/>
                    </div>
                )}
            </div>
            <p className='list-title'>Беспроводные наушники</p>
            <div className="card-list">

                {tws.map(item =>
                    <div className="card">
                        <Card key={item.id} data={item}/>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;