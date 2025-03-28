import '../css/Order/orderStyle.css'
import { Header } from '../components/General/Header'
import { OrderForm } from '../components/Order/OrderForm'

export const OrderPage = (props)=>{

    return <div class="wrapper">

        <Header/>
        <OrderForm/>
        
    </div>
}