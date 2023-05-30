import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";


function ThirdStep(props) {
    return (
        <div>
            <label className={signInStyle.label} htmlFor='email'>Write your email address:</label>
            <input type='text' name='email' placeholder='example@gmail.com' id='email' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'email')}
                   value={props.state.email}/>

            <label className={signInStyle.label} htmlFor='password'>Create a password for your account:</label>
            <input type='password' name='password' placeholder='Password' id='password' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'pass')}
                   value={props.state.pass}/>

            <label className={signInStyle.label} htmlFor='re-pass'>Confirm created password:</label>
            <input type='password' name='re-pass' placeholder='Password' id='re-pass' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 're-pass')}
                   value={props.state.re_pass}/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-2'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                <Link to='/signUp/step-4'>
                    <button className={signInStyle.signInBtn}>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default ThirdStep;