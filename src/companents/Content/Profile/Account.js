import accountStyle from './style/account.module.css'
import {useEffect, useState} from "react";
import {getDoctorInfo} from "../../../service/record.service";
import {Link} from "react-router-dom";
import {getUserRole} from "../../../Store/ActionCreator";

function Account(props) {
    let [fullName, setFullName] = useState()
    let [img, setImg] = useState()
    let [id, setId] = useState()
    useEffect(() => {
        getDoctorInfo(props.dc).then((response) => {
            setFullName(response.data.fullName)
            setImg(<img src={response.data.photo} alt='#' className={accountStyle.img}/>)
            setId(response.data.id)
        })
    }, [])
    let pathName = window.location.pathname
    let linkToProfile = getUserRole() === 1 && pathName === '/d/history' ? '/patientProfile/' : '/doctorProfile/'
    return (
        <div className={accountStyle.container}>
            <div className={accountStyle.imgGrid}>
                <div className={accountStyle.imgBlock}>{img}</div>
            </div>
            <div className={accountStyle.fullNameGrid}>
                <span>{fullName}</span>
            </div>
            <div className={accountStyle.followGrid}>
                <Link to={linkToProfile + id}>
                    <button className={accountStyle.followBtn}>View Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default Account;