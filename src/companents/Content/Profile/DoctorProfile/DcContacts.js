import dcProfileStyle from "../style/doctorProfile.module.css";

function DcContacts(props) {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Contacts</div>
            <div className={dcProfileStyle.dcContacts}>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Address:</span>
                    <span className={dcProfileStyle.contactValue}>{props.contacts.address}</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>City:</span>
                    <span className={dcProfileStyle.contactValue}>{props.contacts.city}</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Phone number:</span>
                    <span className={dcProfileStyle.contactValue}>{props.contacts.phone}</span>
                </div>
                <div className={dcProfileStyle.contactItem}>
                    <span className={dcProfileStyle.contactType}>Email address:</span>
                    <span className={dcProfileStyle.contactValue}>{props.contacts.email}</span>
                </div>

            </div>
        </div>
    )
}

export default DcContacts;