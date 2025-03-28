import '../css/Tarif/tarifStyle.css'
import { Header } from '../components/General/Header'
import { TarifBlock } from '../components/Tarif/TarifBlock'
import { Footer } from '../components/General/Footer'

export const TarifPage = (props)=>{

    return <div class="wrapper">

        <Header/>
        <TarifBlock/>
        <Footer/>

    </div>
}