import profileStyle from '../style/profile.module.css'
import ImgProfile from "../ImgProfile";
import textInfoStyle from "../style/textInfoProfile.module.css";

function DcMainInfo(props) {
    return (
        <div className={profileStyle.mainInfo}>
            <ImgProfile photo={props.mainInfo.photo}/>
            <div className={textInfoStyle.textContainer}>
                <div className={textInfoStyle.fullName}>{props.mainInfo.fullName}</div>
                <div className={textInfoStyle.specialization}>{props.mainInfo.speciality}</div>
                <div className={textInfoStyle.experience}>Total experience(year): {props.mainInfo.experience}</div>
                <div className={textInfoStyle.status}>Doctor</div>
            </div>
        </div>
    )
}

export default DcMainInfo;