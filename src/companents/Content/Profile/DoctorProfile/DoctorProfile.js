import dcProfileStyle from '../style/doctorProfile.module.css'
import DcMainInfo from "./DcMainInfo";
import DcAbout from "./DcAbout";
import DcContacts from "./DcContacts";
import DcReviews from "./DcReviews";
import DcClinic from "./DcClinic";
import {useEffect, useState} from "react";
import LoadingPage from "../../Main/LoadingPage";

function separate_data(profile) {
    let mainInfo = {
        photo: profile.photo,
        fullName: profile.fullName,
        speciality: profile.specialization,
        experience: profile.experience
    }
    let aboutInfo = {about: profile.about}
    let clinicInfo = {
        clinic_id: profile.clinic_id,
        name: profile.clinicName,
        city: profile.clinicCity,
        address: profile.clinicAddress,
        photo: profile.clinicPhoto,
        rating: profile.clinicRating,
        workDays: profile.clinicWorkDays,
        workTime: profile.clinicWorkTime
    }
    let contacts = {
        email: profile.email,
        phone: profile.phoneNumber,
        city: profile.city,
        address: profile.address
    }
    return {
        mainInfo, aboutInfo, clinicInfo, contacts
    }
}

function DoctorProfile(props) {
    let [counter, setCounter] = useState(0)
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            props.getUserData(props.doctorId, setLoading)
            props.getDoctorReviews(props.doctorId)
        }, 1000)
    }, [counter])

    if (!loading) {
        let profile = props.profile.data
        let data = separate_data(profile)
        return (
            <div className={dcProfileStyle.container}>
                <div></div>
                <div>
                    <DcMainInfo mainInfo={data.mainInfo}/>
                    {profile.about === "" ? "" : <DcAbout aboutInfo={data.aboutInfo}/>}
                    <DcClinic clinicInfo={data.clinicInfo}/>
                    <DcContacts contacts={data.contacts}/>
                    <DcReviews dcId={props.profile.data.id} reviews={props.profile.review} setCounter={setCounter}
                               counter={counter}/>
                </div>
                <div></div>
            </div>
        )
    } else {
        return (
            <LoadingPage/>
        )
    }
}

export default DoctorProfile