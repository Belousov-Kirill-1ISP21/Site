import '../../../css/Profile/SidePanel/SidePanelLineStyle.css'
import { Link } from 'react-router-dom';

export const SidePanelLine =(props)=>{
    const {SidePanelLineImg, SidePanelLineButton, isButtonLink, LinkPath} = props
    return <div class="SidePanelLine">
            <img src={SidePanelLineImg} class="SidePanelLineImg"/>

            {(() => {
                if (isButtonLink) {
                    return (
                        <Link to={LinkPath} className="SidePanelLineButtonLink">
                            <button class="SidePanelLineButton">{SidePanelLineButton}</button>
                        </Link>
                    );
                } 
                else {
                    return (
                        <button class="SidePanelLineButton">{SidePanelLineButton}</button>
                    );
                }

            })()}
            
    </div>
}