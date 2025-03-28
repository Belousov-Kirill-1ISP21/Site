import '../../../css/Home/CatalogBlock/CatalogCardStyle.css';

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
            <button class="CatalogBlockCardButton">Заказать</button>
        </div>

    </div>
}