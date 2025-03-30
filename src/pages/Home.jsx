import '../css/Home/homeStyle.css'
import { Header } from '../components/General/Header'
import { TitleBlock } from '../components/Home/TitleBlock'
import { AboutBlock } from '../components/Home/AboutBlock'
import { CatalogBlock } from '../components/Home/CatalogBlock/CatalogBlock'
import { WhyUsBlock } from '../components/Home/WhyUsBlock/WhyUsBlock'
import { Footer } from '../components/General/Footer'

export const HomePage = (props)=>{

    return <div class="wrapper">
        
        <Header isAuthenticated={false}/>
        <TitleBlock/>
        <AboutBlock/>
        <CatalogBlock/>
        <WhyUsBlock/>
        <Footer/>
  
    </div>
}