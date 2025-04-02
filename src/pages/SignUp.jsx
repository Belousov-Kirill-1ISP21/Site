import styles from '../css/SignUp/signUpStyle.module.css'
import { AuthHeader } from '../components/General/AuthHeader'
import { SignUpForm } from '../components/SignUp/SignUpForm'
import { SideBackground } from '../components/General/SideBackground'

export const SignUpPage = (props)=>{

    return <div className={styles.wrapper}>
        
        <div className={styles.main}>
            <AuthHeader isSignUp={true}/>
            <SignUpForm/>
        </div>
        <div className={styles.SideBackgroundContainer}>
            <SideBackground isDark={true}/>
        </div>

    </div>
}