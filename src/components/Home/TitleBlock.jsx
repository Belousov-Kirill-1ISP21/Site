import TitleBlockImg from "../../assets/Home/TitleBlock.png";
import ArrowImg from "../../assets/Home/Arrow.png";
import '../../css/Home/TitleBlockStyle.css';
import { Link } from 'react-router-dom';

export const TitleBlock =(props)=>{
    return <div class="TitleBlock">
    
        <img src={TitleBlockImg} class="TitleBlockImg"/> 
        <div class="TitleBlockContainer">

            <h1 class="TitleBlockH1">Страхование вашего имущества и здоровья</h1>
            <p class="TitleBlockText">А также страхование финансов и путешествий</p>
            
            <Link to="/Catalog" class="TitleBlockLink">
                <button class="TitleBlockButton">
                    
                    <p class="TitleBlockButtonText">Застраховать</p>
                    <img src={ArrowImg} class="TitleBlockButtonImg"/>
                    
                </button>
            </Link>
            

        </div>

    </div>
}