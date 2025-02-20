
export const TarifCard =(props)=>{
    const {img, name, description, duration, price} = props

    return <div class="catalog" id="catalog">
            <h1 class="CatTitle">{name}</h1>
            <div class="tovar">    	
                <div class="CatPic">
                    <img src={img}/>
                </div>
                <div class="CatText">
                    <p class="CatTextTitle">{description}</p>
                    <h2 class="CatTextTitle">Цена: {price} руб</h2>
                    <h2 class="CatTextTitle">Продолжительность действия тарифа: {duration} суток.</h2>
                    <form method="post" class="form">
                        <button class="AddTariffButton">Добавить тариф</button>
                    </form>
                </div>
            </div>
    </div>
}