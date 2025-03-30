import '../css/AboutUs/aboutUsStyle.css'
import { Header } from '../components/General/Header'
import { AboutTitleBlock } from '../components/AboutUs/AboutTitleBlock'
import { AboutMainBlock } from '../components/AboutUs/AboutMainBlock/AboutMainBlock'
import { Footer } from '../components/General/Footer'

export const AboutUsPage = (props)=>{

    return <div class="wrapper">

        <Header/>
        <AboutTitleBlock/>
        <AboutMainBlock/>
        <Footer/>

    </div>
}