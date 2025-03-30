import '../css/Profile/profileStyle.css'
import { SidePanel } from '../components/Profile/SidePanel/SidePanel'
import { MainPanel } from '../components/Profile/MainPanel/MainPanel'

const SidePanelProps = [
    {id:0, SidePanelHeadH1:'Фамилия имя', SidePanelHeadText: 'yourname@gmail.com'},
];

const MainPanelProps = [
    {id:0, MainPanelHeadH1:'Фамилия имя', MainPanelHeadText: 'yourname@gmail.com'},
];

export const ProfilePage = (props)=>{

    return <div class="wrapper">

        <div class="SidePanelContainer">

            {SidePanelProps.map((SidePanelInfo,key)=><SidePanel 
                                                key={key}
                                                SidePanelHeadH1={SidePanelInfo.SidePanelHeadH1} 
                                                SidePanelHeadText={SidePanelInfo.SidePanelHeadText}
                                            />)}

        </div>

        <div class="SidePanelContainer">

            {MainPanelProps.map((MainPanelInfo,key)=><MainPanel 
                                                key={key}
                                                MainPanelHeadH1={MainPanelInfo.MainPanelHeadH1} 
                                                MainPanelHeadText={MainPanelInfo.MainPanelHeadText}
                                            />)}

        </div>

    </div>
}