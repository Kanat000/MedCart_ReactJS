import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";


function SecondStep(props) {
    return (
        <div>
            <label className={signInStyle.label} htmlFor='fullname'>Fullname:</label>
            <input type='text' name='fullname' placeholder='Fullname' id='fullname'
                   className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'fullName')}
                   value={props.state.fullName}/>

            <label className={signInStyle.label} htmlFor='phone'>Phone number:</label>
            <input type='text' name='phone' placeholder='+77*********' id='phone'
                   className={signInStyle.input} onChange={(e) => props.setState(e, 'phone_number')}
                   value={props.state.phone}/>

            <label className={signInStyle.label} htmlFor='IIN'>IIN:</label>
            <input type='text' name='phone' placeholder='************' id='phone'
                   className={signInStyle.input} onChange={(e) => props.setState(e, 'IIN')}
                   value={props.state.iin}/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-1'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                <Link to='/signUp/step-3'>
                    <button className={signInStyle.signInBtn}>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default SecondStep;