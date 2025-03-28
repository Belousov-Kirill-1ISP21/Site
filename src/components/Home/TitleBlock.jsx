import TitleBlockImg from "../../assets/Home/TitleBlock.png";
import ArrowImg from "../../assets/Home/Arrow.png";
import '../../css/Home/TitleBlockStyle.css';

export const TitleBlock =(props)=>{
    return <div class="TitleBlock">
    
        <img src={TitleBlockImg} class="TitleBlockImg"/> 
        <div class="TitleBlockContainer">

            <h1 class="TitleBlockH1">Страхование вашего имущества и здоровья</h1>
            <p class="TitleBlockText">А также страхование финансов и путешествий</p>
            <button class="TitleBlockButton">
                <p class="TitleBlockButtonText">Застраховать</p>
                <img src={ArrowImg} class="TitleBlockButtonImg"/>  
            </button>

        </div>

    </div>
}