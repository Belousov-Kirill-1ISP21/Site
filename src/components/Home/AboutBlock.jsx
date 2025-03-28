import AboutBlockImg from "../../assets/Home/AboutBlock.png";
import '../../css/Home/AboutBlockStyle.css';

export const AboutBlock =(props)=>{
    return <div class="AboutBlock">

        <div class="AboutBlockContainer">
                
            <h1 class="AboutBlockH1">Будьте уверенными в завтрашнем дне</h1>

            <p class="AboutBlockText">Юристы компании «Юридическое Бюро 812» уже долгие годы ведут успешную практику в предоставлении услуг 
            физическим и юридическим лицам в различных правовых сферах, решая вопросы любой сложности. </p>

            <button class="AboutBlockButton">Подробнее</button>

        </div>

        <img src={AboutBlockImg} class="AboutBlockImg"/>

    </div>
}