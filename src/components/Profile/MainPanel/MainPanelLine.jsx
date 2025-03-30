import '../../../css/Profile/MainPanel/MainPanelLineStyle.css'
export const MainPanelLine =(props)=>{
    const {MainPanelLineH1, MainPanelLineText} = props
    return <div class="MainPanelLine">
        <h1 class="MainPanelLineH1">{MainPanelLineH1}</h1>
        <p class="MainPanelLineText">{MainPanelLineText}</p>     
    </div>
}