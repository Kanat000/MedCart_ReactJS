import signInStyle from "./css/signIn.module.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../../service/http-common";
import {specialistDoctors} from "../../Store/SelectDatas";

function LastStep(props) {
    let [clinicOptions, setClinicOptions] = useState()
    useEffect(() => {
        http.post('/home-page/clinics', {text: ""}).then(
            (response) => {
                let clinicArr = response.data.map((clinic) => {
                    return <option value={clinic.id}>{clinic.name}</option>
                })
                setClinicOptions(clinicArr)
            }
        )
    }, [])
    let specialityOptions = specialistDoctors.map((type) => {
        return <option value={type}>{type}</option>
    })
    return (
        <div>
            <label className={signInStyle.label} htmlFor='clinic'>Select the clinic where you work.</label>
            <select name='clinic' id='clinic'
                    className={signInStyle.input} onChange={(e) => props.setState(e, 'clinic')}
                    value={props.state.clinic}>
                {clinicOptions}
            </select>

            <label className={signInStyle.label} htmlFor='speciality'>What specialty do you work in? </label>
            <select name='speciality' id='speciality'
                    className={signInStyle.input} onChange={(e) => props.setState(e, 'speciality')}
                    value={props.state.specialization}>
                {specialityOptions}
            </select>

            <label className={signInStyle.label} htmlFor='experience'>How many years of work experience do you
                have?</label>
            <input type='text' name='experience' id='experience' className={signInStyle.input} placeholder="ex: 2"
                   onChange={(e) => props.setState(e, 'experience')} value={props.state.experience}/>

            <div className={signInStyle.buttonsContainer}>
                <Link to='/signUp/step-4'>
                    <button className={signInStyle.backBtn}>Back</button>
                </Link>
                <Link to='/signUp/step-6'>
                    <button className={signInStyle.signInBtn}>Next</button>
                </Link>
            </div>
        </div>
    )
}

export default LastStep;