import '../../../css/Profile/SidePanel/SidePanelStyle.css'
import Profile from '../../../assets/Profile/Profile.png'
import Tarifs from '../../../assets/Profile/Tarifs.png'
import Settings from '../../../assets/Profile/Settings.png'
import Notifications from '../../../assets/Profile/Notifications.png'
import Back from '../../../assets/Profile/Back.png'
import Exit from '../../../assets/Profile/Exit.png'

import { SidePanelLine } from './SidePanelLine'

const SidePanelLineProps = [
    {id:0, SidePanelLineImg: Profile, SidePanelLineButton:'Профиль', isButtonLink: false, LinkPath: null},
    {id:1, SidePanelLineImg: Tarifs, SidePanelLineButton:'Мои тарифы', isButtonLink: false, LinkPath: null},
    {id:2, SidePanelLineImg: Settings, SidePanelLineButton:'Настройки', isButtonLink: false, LinkPath: null},
    {id:3, SidePanelLineImg: Notifications, SidePanelLineButton:'Уведомления', isButtonLink: false, LinkPath: null},
    {id:4, SidePanelLineImg: Back, SidePanelLineButton:'На главную', isButtonLink: true, LinkPath: "/"},
    {id:5, SidePanelLineImg: Exit, SidePanelLineButton:'Выход', isButtonLink: true, LinkPath: "/SignIn"},
];

export const SidePanel =(props)=>{
    const {SidePanelHeadH1, SidePanelHeadText} = props
    return <div class="SidePanel">

        <div class="SidePanelHead">
            <h1 class="SidePanelHeadH1">{SidePanelHeadH1}</h1>
            <p class="SidePanelHeadText">{SidePanelHeadText}</p>
        </div>

        <div class="SidePanelContainer">

            {SidePanelLineProps.map((SidePanelInfo,key)=><SidePanelLine 
                                                    key={key}
                                                    SidePanelLineImg={SidePanelInfo.SidePanelLineImg} 
                                                    SidePanelLineButton={SidePanelInfo.SidePanelLineButton}
                                                    isButtonLink={SidePanelInfo.isButtonLink} 
                                                    LinkPath={SidePanelInfo.LinkPath}
                                                />)}

        </div>

        
    </div>
}