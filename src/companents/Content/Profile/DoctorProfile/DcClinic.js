import dcProfileStyle from '../style/doctorProfile.module.css'


function DcClinic() {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Clinic</div>
            <div className={dcProfileStyle.dcClinic}>
                {/*<ClinicResult/>*/}
            </div>
        </div>
    )
}

export default DcClinic;