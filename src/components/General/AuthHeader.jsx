import '../../css/General/AuthHeaderStyle.css';
import { Link } from 'react-router-dom';

export const AuthHeader =(props)=>{
    const {isSignUp} = props;

    return <div class="AuthHeader">

        <div class="AuthHeaderContainer">   

            <Link to="/" class="AuthHeaderLogoButtonLink">
                <button class="AuthHeaderLogoButton">Главная</button>
            </Link>
        
            {(() => {
                if (isSignUp) {
                    return (
                        <Link to="/SignIn" className="AuthHeaderRightLink">
                            <button className="AuthHeaderRightButton">Авторизация</button>
                        </Link>
                    );
                } 
                else {
                    return (
                        <>
                            <Link to="/SignUp" class="AuthHeaderRightLink">
                                <button class="AuthHeaderRightButton">Регистрация</button>
                            </Link> 
                        </>
                    );
                }
            })()}
            
        </div>
        
    </div>
}