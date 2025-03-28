import FacebookImg from "../../assets/Footer/Facebook.png";
import InstagramImg from "../../assets/Footer/Instagram.png";
import TwitterImg from "../../assets/Footer/Twitter.png";
import VKImg from "../../assets/Footer/VK.png";
import '../../css/General/FooterStyle.css';

export const Footer =(props)=>{

    return <div class="Footer"> 

        <div class="FooterImgContainer">
            <img  src={FacebookImg} class="FooterImg"/>
            <img src={InstagramImg} class="FooterImg"/>
            <img src={TwitterImg} class="FooterImg"/> 
            <img src={VKImg} class="FooterImg"/>
        </div>

        <div class="FooterButtonContainer">
            <button class="FooterButton">О компании</button>
            <button class="FooterButton">Помощь</button>
            <button class="FooterButton">Контакты</button>
        </div>

        <p class="FooterText">©2025 Страхование онлаин</p>

    </div>
        
}