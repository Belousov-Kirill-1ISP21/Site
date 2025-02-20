
export const InsObj =(props)=>{
    const {img, name} = props

    return <div class="tovar"> 
                <button class="CatPic">
                    <img src={img}/>
                </button>
                <button class="CatText">
                    <h2 class="CatTextTitle">{name}</h2>
                </button>
            </div>
}


						

			