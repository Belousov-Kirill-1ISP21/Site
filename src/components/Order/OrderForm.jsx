import '../../css/Order/OrderFormStyle.css';
import { Link } from 'react-router-dom';

export const OrderForm =(props)=>{
    return <div class="OrderForm">

            <div class="OrderFormH1Container">
                <h1 class="OrderFormH1">Заполните форму для оформления тарифа</h1>
            </div>

            <form class="OrderFormForm">

                <div class="OrderFormFormInputContainer">
                    <h2 class="OrderFormFormH2">Гражданство</h2>
                    <input class="OrderFormFormInput"/>
                </div>

                <div class="OrderFormFormInputContainer">
                    <h2 class="OrderFormFormH2">Документ, удоставеряющий личность</h2>
                    <input class="OrderFormFormInput"/>
                    <input class="OrderFormFormInput"/>
                    <input class="OrderFormFormInput"/>
                </div>

                <div class="OrderFormFormInputContainer">
                    <h2 class="OrderFormFormH2">Орган, выдавший документ</h2>
                    <input class="OrderFormFormInput"/>
                </div>

                <div class="OrderFormFormInputContainer">
                    <h2 class="OrderFormFormH2">Дата выдачи</h2>
                    <input class="OrderFormFormInput"/>
                </div>

                <div class="OrderFormFormButtonContainer">
                    <Link to="/Profile" class="OrderFormFormLink">
                        <button class="OrderFormFormButton">Заказать</button>
                    </Link> 
                </div>

            </form>
        
    </div>
}