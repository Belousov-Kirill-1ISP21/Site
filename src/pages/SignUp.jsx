import '../css/SignUp/signUpStyle.css'
import { AuthHeader } from '../components/General/AuthHeader'
import { SignUpForm } from '../components/SignUp/SignUpForm'

export const SignUpPage = (props)=>{

    return <div class="wrapper">

        <AuthHeader/>
        <SignUpForm/>

    </div>
}