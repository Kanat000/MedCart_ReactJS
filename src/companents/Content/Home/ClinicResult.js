import clinicResultStyle from './style/clinicsResultStyle.module.css'

function ClinicResult(props) {
    return (
        <div className={clinicResultStyle.container}>
            <div className={clinicResultStyle.frame}>
                <div className={clinicResultStyle.imgBlock}>
                    <div className={clinicResultStyle.imgFrame}>
                        <img src={props.clinic.img} alt={props.clinic.name} className={clinicResultStyle.img}/>
                    </div>
                </div>
                <div className={clinicResultStyle.infoBlock}>
                    <div className={clinicResultStyle.name}>{props.clinic.name}</div>
                    <div className={clinicResultStyle.time}>{props.clinic.work_time}</div>
                    <div className={clinicResultStyle.days}>{props.clinic.work_days}</div>
                </div>
                <div className={clinicResultStyle.city}>
                    {props.clinic.city}
                </div>
                <div className={clinicResultStyle.address}>
                    {props.clinic.address}
                </div>
                <div className={clinicResultStyle.rating}>{props.clinic.rating}</div>
                <div className={clinicResultStyle.view}>
                    <button className={clinicResultStyle.viewBtn}>View</button>
                </div>
            </div>
        </div>
    )
}

export default ClinicResult;