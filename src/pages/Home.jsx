import Img1 from '../assets/InsObj/Life.png'
import Img2 from '../assets/InsObj/Health.png'
import Img3 from '../assets/InsObj/House.png'
import Img4 from '../assets/InsObj/Money.png'
import Img5 from '../assets/InsObj/Car.png'
import Img6 from '../assets/InsObj/Travels.png'
import { InsObj } from '../components/insObj.jsx'
import { Header } from '../components/header.jsx'
import { Footer } from '../components/footer.jsx'
import { Navigation } from '../components/navigation.jsx'
import '../css/Home.css'


const products = [
    {id:0, name:'Жизнь', img:Img1},
    {id:1, name:'Здоровье', img:Img2},
    {id:2, name:'Имущество', img:Img3},
    {id:3, name:'Финансы', img:Img4},
    {id:4, name:'Автострахование', img:Img5},
    {id:5, name:'Путешествия', img:Img6}
]

export const HomePage = (props)=>{

    return <div class="main">
        
        <Header/>
        <Navigation/>

        <div class="catalog" id="catalog">
                    <h1 class="CatTitle">Виды страхования</h1>

                    {products.map((product,key)=><InsObj 
                                                    key={key}
                                                    name={product.name} 
                                                    img={product.img}
                                                />)}
        </div>
        
        <Footer/>

    </div>
}