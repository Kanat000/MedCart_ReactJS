import doctorResultStyle from "./style/doctorResults.module.css";
import pr_IMG from '../../../assets/imgs/profile/default_user_img.jpg'
import {Link} from "react-router-dom";


function PatientResult(props) {
    return (
        <div className={doctorResultStyle.container}>
            <div></div>
            <div className={doctorResultStyle.infoContainer}>
                <div className={doctorResultStyle.imgGrid}>
                    <div className={doctorResultStyle.imgBlock}>
                        <img src={pr_IMG} alt={props.patient.fullName}
                             className={doctorResultStyle.img}/>
                    </div>
                </div>
                <div className={doctorResultStyle.fullNameGrid}>
                    <div className={doctorResultStyle.fullName}>{props.patient.fullName}</div>
                </div>
                <div className={doctorResultStyle.cityGrid}>
                    <div>{props.patient.address}</div>
                    <div>{props.patient.city}</div>
                </div>
                <div></div>
                <div className={doctorResultStyle.EnrollGrid}>
                    <Link to={'/patientProfile/' + props.patient.id}>
                        <button className={doctorResultStyle.EnrollBtn}>View</button>
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default PatientResult