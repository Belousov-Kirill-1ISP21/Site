import styles from '../../../css/Profile/SidePanel/SidePanelLineStyle.module.css'
import { Link } from 'react-router-dom';

export const SidePanelLine =(props)=>{
    const {SidePanelLineImg, SidePanelLineButton, isButtonLink, LinkPath} = props
    return <div className={styles.SidePanelLine}>
            <img src={SidePanelLineImg} className={styles.SidePanelLineImg}/>

            {(() => {
                if (isButtonLink) {
                    return (
                        <Link to={LinkPath} className={styles.SidePanelLineButtonLink}>
                            <button className={styles.SidePanelLineButton}>{SidePanelLineButton}</button>
                        </Link>
                    );
                } 
                else {
                    return (
                        <div className={styles.SidePanelLineButtonContainer}>
                            <button className={styles.SidePanelLineButton}>{SidePanelLineButton}</button>
                        </div>
                    );
                }

            })()}
            
    </div>
}