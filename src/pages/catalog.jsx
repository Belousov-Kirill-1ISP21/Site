import Img1 from '../assets/Tarifs/DMC.png'
import Img2 from '../assets/Tarifs/Klesch.png'
import Img3 from '../assets/Tarifs/DMCkorporat.png'
import Img4 from '../assets/Tarifs/DMCdeti.png'
import Img5 from '../assets/Tarifs/Onkologiya.png'
import Img6 from '../assets/Tarifs/Materin.png'
import Img7 from '../assets/Tarifs/OMC.png'
import Img8 from '../assets/Tarifs/MMC.png'
import { InsTarif } from '../components/insTarif.jsx'
import { Header } from '../components/header.jsx'
import { Footer } from '../components/footer.jsx'
import '../css/catalogStyle.css'


const products = [
    {id:0, name:'Добровольное медицинское страхование (ДМС)', price:100000, img:Img1},
    {id:1, name:'Страхование на случай укуса клеща', price:50000, img:Img2},
    {id:2, name:'ДМС для корпоративных клиентов', price:60000, img:Img3},
    {id:3, name:'ДМС для ребёнка', price:70000, img:Img4},
    {id:4, name:'Полис онкострахования «ОнкоМед»', price:60000, img:Img5},
    {id:5, name:'Защита материнства', price:100000, img:Img6},
    {id:6, name:'Обязательное медицинское страхование (ОМС)', price:40000, img:Img7},
    {id:7, name:'Международное медицинское страхование (ММС)', price:100000, img:Img8}
]

export const CatalogPage = (props)=>{

    return <div class="main">
                
        <Header/> 

        <div class="catalog" id="catalog">
                    <h1 class="CatTitle">Тарифы страхования</h1>

                    {products.map((product,key)=><InsTarif 
                                                    key={key}
                                                    name={product.name} 
                                                    price={product.price}
                                                    img={product.img}
                                                />)}
        </div>

        <Footer/>

    </div>
}


                            
                    
                
    
                