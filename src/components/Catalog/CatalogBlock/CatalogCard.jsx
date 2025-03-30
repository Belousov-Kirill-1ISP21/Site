import '../../../css/Catalog/CatalogBlock/CatalogCardStyle.css';
import { Link } from 'react-router-dom';
export const CatalogCard =(props)=>{
    const {CatalogCardH1, CatalogCardText, CatalogCardImg} = props
    return <div class="CatalogCard">

        <div class="CatalogCardImgContainer">
            <img src={CatalogCardImg} class="CatalogCardImg"/> 
        </div>
        <div class="CatalogCardInfoContainer">
            <h1 class="CatalogCardH1">{CatalogCardH1}</h1>
            <p class="CatalogCardText">от</p> <p class="CatalogCardTextInText">{CatalogCardText}</p>
            <Link to="/Tarif" class="CatalogCardLink">
                <button class="CatalogCardButton">Заказать</button>
            </Link>
        </div>
        
    </div>
}