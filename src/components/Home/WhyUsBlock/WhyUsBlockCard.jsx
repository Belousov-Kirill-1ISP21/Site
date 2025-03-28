import ProcentImg from "../../../assets/Home/Procent.png";
import '../../../css/Home/WhyUsBlock/WhyUsBlockCardStyle.css';

export const WhyUsBlockCard =(props)=>{
    const {WhyUsBlockCardH1, WhyUsBlockCardText} = props
    return <div class="WhyUsBlockCard">

        <img src={ProcentImg} class="WhyUsBlockCardImg"/> 
        <h1 class="WhyUsBlockCardH1">{WhyUsBlockCardH1}</h1>
        <p class="WhyUsBlockCardText">{WhyUsBlockCardText}</p>

    </div>
}