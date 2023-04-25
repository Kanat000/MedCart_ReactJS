import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";


function ThirdStep(props) {
    return (
        <div>
            <label className={signInStyle.label} htmlFor='email'>Email:</label>
            <input type='text' name='email' placeholder='Email' id='email' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'email')}
                   value={props.state.email}/>

            <label className={signInStyle.label} htmlFor='password'>Password:</label>
            <input type='password' name='password' placeholder='Password' id='password' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'pass')}
                   value={props.state.pass}/>

            <label className={signInStyle.label} htmlFor='re-pass'>Confirm password:</label>
            <input type='password' name='re-pass' placeholder='Password' id='re-pass' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 're-pass')}
                   value={props.state.re_pass}/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-2'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                <button className={signInStyle.signInBtn} onClick={() => props.saveInfo(props.state)}>Sign Up</button>
            </div>
        </div>
    )
}

export default ThirdStep;