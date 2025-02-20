
export const InsTarif =(props)=>{
    const {img, name, price} = props

    return <div class="tovar"> 
                <button class="CatPic">
                    <img src={img}/>
                </button>
                <button class="CatText">
                    <h2 class="CatTextTitle">{name}</h2>
                    <h2 class="CatTextTitle">Цена: {price} руб</h2>
                </button>
            </div>
}


						

			