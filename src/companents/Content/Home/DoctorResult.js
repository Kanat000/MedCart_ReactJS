import doctorResultStyle from './style/doctorResults.module.css'

function DoctorResult(props) {
    return (
        <div className={doctorResultStyle.container}>
            <div></div>
            <div className={doctorResultStyle.infoContainer}>
                <div className={doctorResultStyle.imgGrid}>
                    <div className={doctorResultStyle.imgBlock}>
                        <img src={props.dc.profile_img} alt={props.dc.full_name} className={doctorResultStyle.img}/>
                    </div>
                </div>
                <div className={doctorResultStyle.fullNameGrid}>
                    <div className={doctorResultStyle.fullName}>{props.dc.full_name}</div>
                    <div className={doctorResultStyle.specialist}>{props.dc.specialization}</div>
                </div>
                <div className={doctorResultStyle.cityGrid}>{props.dc.city}</div>
                <div className={doctorResultStyle.RatingGrid}>{props.dc.rating}</div>
                <div className={doctorResultStyle.EnrollGrid}>
                    <button className={doctorResultStyle.EnrollBtn}>View</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default DoctorResult;