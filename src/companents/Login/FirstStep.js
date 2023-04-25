import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";


function FirstStep(props) {
    return (
        <div>
            <label className={signInStyle.label} htmlFor='userType'>User Type:</label>
            <select name='userType' id='userType'
                    className={signInStyle.input} onChange={(e) => props.setState(e, 'role')} value={props.state.role}>
                <option value={2}>Patient</option>
                <option value={1}>Doctor</option>
            </select>
            <Link to='/signUp/step-2'>
                <button className={signInStyle.signInBtn}>Next Step</button>
            </Link>
        </div>
    )
}

export default FirstStep;