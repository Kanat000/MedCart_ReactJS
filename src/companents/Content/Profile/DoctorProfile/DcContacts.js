import dcProfileStyle from "../style/doctorProfile.module.css";

function DcContacts() {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Contacts</div>
            <div className={dcProfileStyle.dcContacts}>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Phone number:</span>
                    <span className={dcProfileStyle.contactValue}>87785542262</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Email address:</span>
                    <span className={dcProfileStyle.contactValue}>super_doc@Gmail.com</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Telegram:</span>
                    <span className={dcProfileStyle.contactValue}>@super_dc</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Instagram:</span>
                    <span className={dcProfileStyle.contactValue}>@super_doctor_11</span>
                </div>

            </div>
        </div>
    )
}

export default DcContacts;