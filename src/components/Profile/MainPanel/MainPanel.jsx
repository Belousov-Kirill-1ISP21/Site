import '../../../css/Profile/MainPanel/MainPanelStyle.css'
import { MainPanelLine } from './MainPanelLine'

const MainPanelLineProps = [
    {id:0, MainPanelLineH1:'Фамилия', MainPanelLineText: 'Фамилия'},
    {id:1, MainPanelLineH1:'Имя', MainPanelLineText: 'Имя'},
    {id:2, MainPanelLineH1:'Отчество', MainPanelLineText: 'Отчество'},
    {id:3, MainPanelLineH1:'Email', MainPanelLineText: 'yourname@gmail.com'},
    {id:4, MainPanelLineH1:'Телефон', MainPanelLineText: '+79999994444'},
];

export const MainPanel =(props)=>{
    const {MainPanelHeadH1, MainPanelHeadText} = props
    return <div class="MainPanel">
        
        <div class="MainPanelHead">
            <h1 class="MainPanelHeadH1">{MainPanelHeadH1}</h1>
            <p class="MainPanelHeadText">{MainPanelHeadText}</p>
        </div>

        <div class="SidePanelContainer">

            {MainPanelLineProps.map((MainPanelInfo,key)=><MainPanelLine 
                                                    key={key}
                                                    MainPanelLineH1={MainPanelInfo.MainPanelLineH1} 
                                                    MainPanelLineText={MainPanelInfo.MainPanelLineText}
                                                />)}
            
        </div>

        <div class="MainPanelButtonContainer">
            <button>Сохранить изменения</button>
        </div>
            
    </div>
}