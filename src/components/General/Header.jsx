import '../../css/General/HeaderStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Header =(props)=>{
    const {isAuthenticated} = props;

    return <div class="Header" id = "Header">
        
        <div class="HeaderLeft">
            
            <button class="HeaderLogoButton">
                <Link to="/" class="HeaderLeftLink">Страхование онлаин</Link>
            </button>
            
            <div class="HeaderLeftButtonContainer">
            
                <button class="HeaderLeftButton">
                    <Link to="/AboutUs" class="HeaderLeftButtonContainerLink">О компании</Link>
                </button>
           
                <button class="HeaderLeftButton">Помощь</button>
                <button class="HeaderLeftContactButton">
                    <p class="HeaderLeftContactButtonText">Контакты: </p> <p class="HeaderLeftContactButtonTextInText">+7 495 123-45-67</p> 
                </button>
            </div>
        </div>

        <div class="HeaderRight">
            {(() => {
                if (isAuthenticated) {
                    return (
                        <Link to="/Profile" className="HeaderRightLink">
                            <button className="HeaderRightButton">Личный кабинет</button>
                        </Link>
                    );
                } 
                else {
                    return (
                        <>
                            <Link to="/SignUp" class="HeaderRightLink">
                                <button class="HeaderRightButton">Регистрация</button>
                            </Link>
                            
                            <Link to="/SignIn" class="HeaderRightLink">
                                <button class="HeaderRightButton">Авторизация</button>
                            </Link> 
                        </>
                    );
                }
            })()}
            
        </div>
        
    </div>
}