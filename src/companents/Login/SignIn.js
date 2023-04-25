import signInStyle from './css/signIn.module.css'
import welcome_img_sign_in from './imgs/medical-records-request.png'
import {Link} from "react-router-dom";

function SignIn(props) {
    return (
        <div className={signInStyle.pageContainer}>
            <div className={signInStyle.container}>
                <div className={signInStyle.imgGrid}>
                    <div className={signInStyle.imgBlock}>
                        <img src={welcome_img_sign_in} alt='22' className={signInStyle.welcome_img}/>
                    </div>
                </div>
                <div className={signInStyle.formGrid}>
                    <div className={signInStyle.formBlock}>
                        <div className={signInStyle.title}>Sign In</div>
                        <div className={signInStyle.form}>
                            <label className={signInStyle.label} htmlFor='email'>Email:</label>
                            <input type='text' name='email' placeholder='Email' id='email' value={props.state.email}
                                   onChange={(e) => props.setState(e, 'email')}
                                   className={signInStyle.input}/>
                            <div className={signInStyle.space}></div>
                            <label className={signInStyle.label} htmlFor='password'>Password:</label>
                            <input type='password' name='password' placeholder='Password' id='password'
                                   value={props.state.password}
                                   onChange={(e) => props.setState(e, 'password')}
                                   className={signInStyle.input}/>
                            <div className={signInStyle.space}></div>
                            <input type='button' className={signInStyle.signInBtn} value='Sign In' onClick={() => {
                                props.sendInfo(props.state)
                            }}/>
                            {/*<div className={signInStyle.error}>Incorrect password</div>*/}
                            <div className={signInStyle.otherAction}><Link to='/signUp/step-1'>Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;