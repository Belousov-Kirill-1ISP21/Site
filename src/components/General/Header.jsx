import '../../css/General/HeaderStyle.css';

export const Header =(props)=>{
    return <div class="Header">
        
        <div class="HeaderLeft">
            <button class="HeaderLogoButton">Страхование онлаин</button>
            <div class="HeaderLeftButtonContainer">
                <button class="HeaderLeftButton">О компании</button>
                <button class="HeaderLeftButton">Помощь</button>
                <button class="HeaderLeftContactButton">
                    <p class="HeaderLeftContactButtonText">Контакты: </p> <p class="HeaderLeftContactButtonTextInText">+7 495 123-45-67</p> 
                </button>
            </div>
        </div>

        <div class="HeaderRight">
            <button class="HeaderRightButton">Регистрация</button>
            <button class="HeaderRightButton">Авторизация</button>
        </div>
        
    </div>
}