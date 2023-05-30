import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";
import {cities} from "../../Store/SelectDatas";

function FourthStep(props) {
    let cityOptions = cities.map((city) => {
        return <option value={city}>{city}</option>
    })
    let buttonReplacer = (state, saveInfo) => {
        if (state.role === '2') {
            return <button className={signInStyle.signInBtn} onClick={() => saveInfo(state)}>Sign
                Up</button>
        } else {
            return <Link to='/signUp/step-5'>
                <button className={signInStyle.signInBtn}>Next</button>
            </Link>
        }
    }
    return (
        <div>
            <label className={signInStyle.label} htmlFor='city'>Choose the city you live in at the moment.</label>
            <select name='city' id='city'
                    className={signInStyle.input} onChange={(e) => props.setState(e, 'city')} value={props.state.city}>
                {cityOptions}
            </select>

            <label className={signInStyle.label} htmlFor='password'>Write your accommodation address:</label>
            <input type='text' name='address' placeholder='Address' id='address' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'address')}
                   value={props.state.address}/>

            <label className={signInStyle.label} htmlFor='profile_img'>Choose a picture for your profile.</label>
            <input type='file' name='profile_img' id='profile_img' className={signInStyle.input}
                   onChange={(e) => props.setState(e, 'profile_img')} accept=".jpg, .jpeg, .webp, .png, .svg"/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-3'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                {buttonReplacer(props.state, props.saveInfo, props.state.role)}
            </div>
        </div>
    )
}

export default FourthStep;