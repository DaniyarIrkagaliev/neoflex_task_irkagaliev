import React from 'react';
import "./footerStyles.scss";


const Footer = () => {
    return (
        <div className="footer-body">
            <div className=''>
                <div className='footer-elements'>
                    <div className='section-title'>
                        <a href='/'>QPICK</a>
                    </div>
                    <div className='footer-element'>
                        <div>
                            <div className='nav-element'>
                                <a href='/'>Избранное</a>
                            </div>
                            <div className='nav-element'>
                                <a href='/cart'>Корзина</a>
                            </div>
                            <div className='nav-element'>
                                <a>Контакты</a>
                            </div>
                        </div>
                        <div>
                            <div className='nav-element'>
                                <a>Условия Сервиса</a>
                            </div>
                            <span>
                                <img src='/img/icons/lang.png'/>
                            </span>
                            <span className='lang-active'>Rus</span>
                            <span className='lang-nonactive'>Eng</span>

                        </div>
                    </div>
                    <div className='contacts'>
                         <span>
                            <a href="https://vk.com/daniyar_irkagaliev" target="_blank">
                                <img src='/img/icons/VK.png'/>
                            </a>
                         </span>
                        <span>
                            <a href="https://t.me/BRGD_Kazakh" target="_blank">
                               <img src='/img/icons/Telegram.png'/>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                <img src='/img/icons/Whatsapp.png'/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {/*<p>Условия Сервиса</p>*/}
            {/*<span>Rus</span>*/}
            {/*<span>Eng</span>*/}
        </div>
    );
};

export default Footer;