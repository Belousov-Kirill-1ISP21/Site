import '../css/Profile/profileStyle.css'
import { SidePanel } from '../components/Profile/SidePanel/SidePanel'
import { MainPanel } from '../components/Profile/MainPanel/MainPanel'


export const ProfilePage = (props)=>{

    return <div class="wrapper">

        <SidePanel/>
        <MainPanel/>

    </div>
}