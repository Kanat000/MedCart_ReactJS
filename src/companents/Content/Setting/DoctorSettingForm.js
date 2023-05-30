import setAccountStyle from "./css/setaccount.module.css";
import {specialistDoctors} from "../../../Store/SelectDatas";
import {useEffect, useState} from "react";
import http from "../../../service/http-common";


function DoctorSettingForm(props) {
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
        <div className={setAccountStyle.form}>
            <label htmlFor="about" className={setAccountStyle.label}>About:</label>
            <textarea className={setAccountStyle.textArea} id='about' value={props.accountState.about}
                      onChange={(e) => props.changeInfo(e, 'about')}/>

            <label htmlFor="speciality" className={setAccountStyle.label}>Speciality:</label>
            <select id='speciality'
                    className={setAccountStyle.input} onChange={(e) => props.changeInfo(e, 'speciality')}
                    value={props.accountState.specialization}>
                {specialityOptions}
            </select>

            <label htmlFor="experience" className={setAccountStyle.label}>Experience:</label>
            <input className={setAccountStyle.input} id='experience' value={props.accountState.experience}
                   onChange={(e) => props.changeInfo(e, 'experience')}/>

            <label className={setAccountStyle.label} htmlFor='clinic'>Clinic:</label>
            <select id='clinic' className={setAccountStyle.input} onChange={(e) => props.changeInfo(e, 'clinic')}
                    value={props.accountState.clinic}>
                {clinicOptions}
            </select>

        </div>

    )
}

export default DoctorSettingForm