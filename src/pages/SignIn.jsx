import styles from '../css/SignIn/signInStyle.module.css'
import { AuthHeader } from '../components/General/AuthHeader'
import { SignInForm } from '../components/SignIn/SignInForm'
import { SideBackground } from '../components/General/SideBackground'

export const SignInPage = (props)=>{

    return <div className={styles.wrapper}>

        <div className={styles.main}>
            <AuthHeader isSignUp={false}/>
            <SignInForm/>
        </div>
        <div className={styles.SideBackgroundContainer}>
            <SideBackground isDark={true}/>
        </div>

    </div>
}