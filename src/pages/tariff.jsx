import Img1 from '../assets/Tarifs/OSAGO.png'
import { TarifCard } from '../components/tarifCard.jsx'
import { Header } from '../components/header.jsx'
import { Footer } from '../components/footer.jsx'
import '../css/tariffStyle.css'


const products = [
    {id:0, name:'ОСАГО', duration:365, price:100000, img:Img1,
     description: "ОСАГО — обязательный вид страхования по закону, который обязательно требуется при покупке нового автомобиля."+ 
     "Благодаря ОСАГО не нужно возмещать ущерб пострадавшим в ДТП самостоятельно. Компенсация за ущерб имуществу или здоровью третьих лиц производится страховой компанией."},
]

export const TariffPage = (props)=>{

    return <div class="main">
                
        <Header/> 

        {products.map((product,key)=><TarifCard 
                                        key={key}
                                        name={product.name} 
                                        img={product.img}
                                        price={product.price}
                                        description={product.description}
                                        duration={product.duration}
                                    />)}
        

        <Footer/>

    </div>
}