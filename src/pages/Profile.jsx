import Img1 from '../assets/Tarifs/DMC.png'
import Img2 from '../assets/Tarifs/DMCkorporat.png'
import Img3 from '../assets/Tarifs/DMCdeti.png'
import Img4 from '../assets/Tarifs/Onkologiya.png'
import Img5 from '../assets/Tarifs/OMC.png'
import Img6 from '../assets/Tarifs/MMC.png'
import { InsObj } from '../components/insObj.jsx'
import '../css/ProfileStyle.css'

export const ProfilePage = (props)=>{

    const products = [
        {id:0, name:'Добровольное медицинское страхование (ДМС)', img:Img1},
        {id:1, name:'ДМС для корпоративных клиентов', img:Img2},
        {id:2, name:'ДМС для ребёнка', img:Img3},
        {id:3, name:'Полис онкострахования «ОнкоМед»', img:Img4},
        {id:4, name:'Обязательное медицинское страхование (ОМС)', img:Img5},
        {id:5, name:'Международное медицинское страхование (ММС)', img:Img6}
    ]

    return <div class="main">
        
        <div class="header">
            <button class="HomeButton">Главная</button>
            <button class="SettingsButton">Настройки</button>
            <button class="ExitButton">Выход</button>
        </div>
        
        <div class="catalog" id="catalog">
                    <h1 class="CatTitle">Приобретённые трифы страхования</h1>
                    <div class="container">
                        {products.map((product,key)=><InsObj 
                                                        key={key}
                                                        name={product.name} 
                                                        img={product.img}
                                                    />)}
                    </div>
        </div>

    </div>

}