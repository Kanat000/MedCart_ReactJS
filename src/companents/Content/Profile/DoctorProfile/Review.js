import reviewStyle from '../style/review.module.css'
import accountStyle from "../style/account.module.css";
import doctor_img from "../../../../assets/imgs/doctor_img.jpg";
import {Rating} from "react-simple-star-rating";
import {useEffect, useState} from "react";
import {getDoctorInfo} from "../../../../service/record.service";
import Account from "../Account";
import {getUserRole} from "../../../../Store/ActionCreator";

function Review(props) {
    let dateArr = String(props.review.createDate).split('T')
    let [img, setImg] = useState()
    let [fullName, setFullName] = useState()
    let pathName = window.location.pathname
    let isPatientHistory = getUserRole() === 2 && pathName === '/history'
    useEffect(() => {
        getDoctorInfo(props.review.patientId).then((response) => {
                setImg(<img src={response.data.photo} alt={doctor_img.name}
                            className={accountStyle.img}/>)
                setFullName(response.data.fullName)
            }
        )
    }, [props.review])
    return (
        <div className={reviewStyle.review}
             style={isPatientHistory ? {
                 display: 'grid',
                 gridRowGap: '4vh',
                 marginTop: "7vh",
                 marginBottom: "7vh"
             } : {}}>
            {isPatientHistory ? <Account dc={props.review.doctorId}/> : ''}
            <div style={isPatientHistory ? {background: '#efefef', padding: "3vh"} : {}}>
                <div className={reviewStyle.header}>
                    <div className={accountStyle.imgGrid}>
                        <div className={accountStyle.imgBlock}>{img}</div>
                    </div>
                    <div className={accountStyle.fullNameGrid}>
                        <span>{fullName}</span>
                    </div>
                    <div className={reviewStyle.date}>{dateArr[1].slice(0, -7)} {dateArr[0]}</div>
                    <div className={reviewStyle.rating}><Rating size="3.5vh" initialValue={props.review.rating / 2}
                                                                readonly='readonly'/></div>
                </div>
                <div className={reviewStyle.body}>
                    {props.review.reviewText}
                </div>
            </div>
        </div>
    )
}

export default Review;