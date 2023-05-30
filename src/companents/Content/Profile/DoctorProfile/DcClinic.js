import dcProfileStyle from '../style/doctorProfile.module.css'
import ClinicResult from "../../Home/ClinicResult";


function DcClinic(props) {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Clinic</div>
            <div className={dcProfileStyle.dcClinic}>
                <ClinicResult clinic={props.clinicInfo}/>
            </div>
        </div>
    )
}

export default DcClinic;