import '../../../css/Home/CatalogBlock/CatalogBlockStyle.css';
import { CatalogCard } from './CatalogCard'

const CatalogBlockCardProps = [
    {id:0, CatalogBlockCardH1:'Страхование жизни', CatalogBlockCardText: '2890 ₽'},
    {id:1, CatalogBlockCardH1:'Страхование здоровья', CatalogBlockCardText: '2890 ₽'},
    {id:2, CatalogBlockCardH1:'Страхование имущества', CatalogBlockCardText: '2890 ₽'},
    {id:3, CatalogBlockCardH1:'Страхование финансов', CatalogBlockCardText: '2890 ₽'},
    {id:4, CatalogBlockCardH1:'Страхование авто', CatalogBlockCardText: '2890 ₽'},
    {id:5, CatalogBlockCardH1:'Страхование путешествий', CatalogBlockCardText: '2890 ₽'},
];

export const CatalogBlock =(props)=>{
    return <div class="CatalogBlock">

        <div class="CatalogBlockHead">
            <h1 class="CatalogBlockHeadH1">Выберите продукт</h1>
            <p class="CatalogBlockHeadText">Подберите страховой продукт, который наилучшим образом подойдёт именно Вам</p>
        </div>

        <div class="CatalogBlockContainer">

            {CatalogBlockCardProps.map((CatalogBlockCardInfo,key)=><CatalogCard 
                                                    key={key}
                                                    CatalogBlockCardH1={CatalogBlockCardInfo.CatalogBlockCardH1} 
                                                    CatalogBlockCardText={CatalogBlockCardInfo.CatalogBlockCardText}
                                                />)}

        </div>
        
    </div>
}