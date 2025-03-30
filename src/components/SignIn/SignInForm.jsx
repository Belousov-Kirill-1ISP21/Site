import '../../css/SignIn/SignInFormStyle.css';
import { Link } from 'react-router-dom';
export const SignInForm =(props)=>{
    return <div class="SignInForm">

            <div class="SignInFormH1Container">
                <h1 class="SignInFormH1">Вход в аккаунт</h1>
            </div>

            <form class="SignInFormForm">
                <input class="SignInFormFormInput"/>
                <input class="SignInFormFormInput"/>
                <input type="checkbox" class="SignInFormFormCheckbox" id="RememberMeCheckBox" name="RememberMe"/>
                <label for="RememberMeCheckBox">Remember Me</label> 
                <button class="SignInFormFormCheckbox">Забыли пароль?</button>
                <Link to="/" class="SignInFormFormLink">
                    <button class="SignInFormFormButton">Войти</button>
                </Link>
            </form>
        
    </div>

}