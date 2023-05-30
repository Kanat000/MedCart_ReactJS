import doctorResultStyle from './style/doctorResults.module.css'
import {Link} from "react-router-dom";

function DoctorResult(props) {
    return (
        <div className={doctorResultStyle.container}>
            <div></div>
            <div className={doctorResultStyle.infoContainer}>
                <div className={doctorResultStyle.imgGrid}>
                    <div className={doctorResultStyle.imgBlock}>
                        <img src={props.dc.photo} alt={props.dc.fullName} className={doctorResultStyle.img}/>
                    </div>
                </div>
                <div className={doctorResultStyle.fullNameGrid}>
                    <div className={doctorResultStyle.fullName}>{props.dc.fullName}</div>
                    <div className={doctorResultStyle.specialist}>{props.dc.specialization}</div>
                </div>
                <div className={doctorResultStyle.cityGrid}>{props.dc.city}</div>
                <div className={doctorResultStyle.RatingGrid}>{props.dc.rating}</div>
                <div className={doctorResultStyle.EnrollGrid}>
                    <Link to={'/doctorProfile/' + props.dc.user.id}>
                        <button className={doctorResultStyle.EnrollBtn}>View</button>
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default DoctorResult;