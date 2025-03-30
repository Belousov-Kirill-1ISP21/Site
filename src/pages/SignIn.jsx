import '../css/SignIn/signInStyle.css'
import { AuthHeader } from '../components/General/AuthHeader'
import { SignInForm } from '../components/SignIn/SignInForm'

export const SignInPage = (props)=>{

    return <div class="wrapper">

        <AuthHeader isSignUp={false}/>
        <SignInForm/>

    </div>
}