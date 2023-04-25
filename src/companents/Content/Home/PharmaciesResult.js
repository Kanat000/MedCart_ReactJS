import clinicResultStyle from "./style/clinicsResultStyle.module.css";

function PharmaciesResult(props) {
    return (
        <div className={clinicResultStyle.container}>
            <div className={clinicResultStyle.pharmFrame}>
                <div className={clinicResultStyle.imgBlock}>
                    <div className={clinicResultStyle.imgFrame}>
                        <img src={props.pharmacy.img} alt={props.pharmacy.name} className={clinicResultStyle.img}/>
                    </div>
                </div>
                <div className={clinicResultStyle.infoBlock}>
                    <div className={clinicResultStyle.name}>{props.pharmacy.name}</div>
                    <div className={clinicResultStyle.time}>{props.pharmacy.work_time}</div>
                    <div className={clinicResultStyle.days}>{props.pharmacy.contacts}</div>

                </div>
                <div className={clinicResultStyle.city}>
                    {props.pharmacy.city}
                </div>
                <div className={clinicResultStyle.address}>
                    {props.pharmacy.address}
                </div>
                <div className={clinicResultStyle.view}>
                    <button className={clinicResultStyle.viewBtn}>View</button>
                </div>
            </div>
        </div>
    )
}

export default PharmaciesResult;