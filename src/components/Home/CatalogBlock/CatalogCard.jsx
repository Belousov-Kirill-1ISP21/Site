import '../../../css/Home/CatalogBlock/CatalogCardStyle.css';
import { Link } from 'react-router-dom';

export const CatalogCard =(props)=>{
    const {CatalogBlockCardH1, CatalogBlockCardText} = props
    return <div class="CatalogBlockCard">

        <div class="CatalogBlockCardContainer">
            <h1 class="CatalogBlockCardH1">{CatalogBlockCardH1}</h1>
        </div>
        <div class="CatalogBlockCardContainer">
            <p class="CatalogBlockCardText">от </p> <p class="CatalogBlockCardTextInText">{CatalogBlockCardText}</p>
        </div> 
        <div class="CatalogBlockCardContainer">
            <Link to="/Catalog" class="CatalogBlockCardContainerLink">
                <button class="CatalogBlockCardButton">Заказать</button>
            </Link>
        </div>

    </div>
}