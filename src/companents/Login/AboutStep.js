import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";

function LastStep(props) {
    return (
        <div>
            <label className={signInStyle.label} htmlFor='about'>Write about yourself.</label>
            <textarea name='about' id='about' className={signInStyle.textArea}
                      placeholder="Services, achievements, experiences, comments, requirements, about yourself."
                      onChange={(e) => props.setState(e, 'about')} value={props.state.about}/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-5'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                <button className={signInStyle.signInBtn} onClick={() => props.saveInfo(props.state)}>Sign Up</button>
            </div>
        </div>
    )
}

export default LastStep;