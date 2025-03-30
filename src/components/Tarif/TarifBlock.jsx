import '../../css/Tarif/TarifBlockStyle.css';
import { Link } from 'react-router-dom';

export const TarifBlock =(props)=>{
    const {TarifBlockH1, TarifBlockImg, TarifBlockText, TarifBlockPrice } = props
    return <div class="TarifBlock">

        <div class="TarifBlockH1Container">
            <h1 class="TarifBlockH1">{TarifBlockH1}</h1>
        </div>

        <div class="TarifBlockInfoContainer">
            <div class="TarifBlockInfoImgContainer">
                <img src={TarifBlockImg} class="TarifBlockImg"/> 
            </div>
            <div class="TarifBlockInfoTextContainer">
                <p class="TarifBlockText">{TarifBlockText}</p>
                <p class="TarifBlockPrice">{TarifBlockPrice}</p> <p class="TarifBlockText">в зависимости от условий.</p>
            </div>
        </div>
        
        <div class="TarifBlockButtonContainer">
            <Link to="/Order" class="TarifBlockLink">
                <button class="TarifBlockButton">Расчитать цену</button>
            </Link>
        </div>
        
    </div>

}