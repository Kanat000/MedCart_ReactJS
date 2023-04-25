import profileStyle from '../style/profile.module.css'
import ImgProfile from "../ImgProfile";
import textInfoStyle from "../style/textInfoProfile.module.css";

function DcMainInfo() {
    return (
        <div className={profileStyle.mainInfo}>
            <ImgProfile/>
            <div className={textInfoStyle.textContainer}>
                <div className={textInfoStyle.fullName}>Kairat Nurtas</div>
                <div className={textInfoStyle.specialization}>Ultrasound doctor</div>
                <div className={textInfoStyle.experience}>Total experience(year): 3</div>
                <div className={textInfoStyle.status}>Doctor</div>
            </div>
        </div>
    )
}

export default DcMainInfo;