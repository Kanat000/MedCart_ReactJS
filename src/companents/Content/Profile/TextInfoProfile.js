import textInfoStyle from "./style/textInfoProfile.module.css";


function TextInfoProfile(props) {
    return (
        <div className={textInfoStyle.textContainer}>
            <div className={textInfoStyle.fullName}>{props.profile.fullName}</div>
            <div className={textInfoStyle.phone}>{props.profile.phoneNumber}</div>
            <div className={textInfoStyle.address}>{props.profile.city}, {props.profile.address}</div>
            <div className={textInfoStyle.status}>Patient</div>
        </div>
    )
}

export default TextInfoProfile