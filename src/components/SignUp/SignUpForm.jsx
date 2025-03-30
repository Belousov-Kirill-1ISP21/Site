import '../../css/SignUp/SignUpFormStyle.css';
import { Link } from 'react-router-dom';
export const SignUpForm =(props)=>{
    return <div class="SignUpForm">

            <div class="SignUpFormH1Container">
                <h1 class="SignInFormH1">Регистрация</h1>
            </div>

            <form class="SignUpFormForm">
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <input class="SignUpFormFormInput"/>
                <Link to="/Profile" class="SignUpFormFormLink">
                    <button class="SignUpFormFormButton">Зарегистрироваться</button>
                </Link>
                <p class="SignUpFormFormText">By Creating an Account, it means you agree to our Privacy Policy and Terms of Service</p>
            </form>

        
        
    </div>
}