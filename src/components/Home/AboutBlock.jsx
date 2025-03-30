import AboutBlockImg from "../../assets/Home/AboutBlock.png";
import '../../css/Home/AboutBlockStyle.css';
import { Link } from 'react-router-dom';

export const AboutBlock =(props)=>{
    return <div class="AboutBlock">

        <div class="AboutBlockContainer">
                
            <h1 class="AboutBlockH1">Будьте уверенными в завтрашнем дне</h1>

            <p class="AboutBlockText">Юристы компании «Юридическое Бюро 812» уже долгие годы ведут успешную практику в предоставлении услуг 
            физическим и юридическим лицам в различных правовых сферах, решая вопросы любой сложности. </p>

            <Link to="/AboutUs" class="AboutBlockLink">
                <button class="AboutBlockButton">Подробнее</button>
            </Link>

        </div>

        <img src={AboutBlockImg} class="AboutBlockImg"/>

    </div>
}