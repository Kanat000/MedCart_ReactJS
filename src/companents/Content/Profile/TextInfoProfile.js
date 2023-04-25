import textInfoStyle from "./style/textInfoProfile.module.css";


function TextInfoProfile(props) {
    return (
        <div className={textInfoStyle.textContainer}>
            <div className={textInfoStyle.fullName}>{props.profile.full_name}</div>
            <div className={textInfoStyle.phone}>{props.profile.phone}</div>
            <div className={textInfoStyle.address}>city {props.profile.city}, {props.profile.address}</div>
            <div className={textInfoStyle.status}>Patient</div>
        </div>
    )
}

export default TextInfoProfile