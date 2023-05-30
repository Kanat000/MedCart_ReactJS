import dcProfileStyle from '../style/doctorProfile.module.css'

function DcAbout(props) {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>About</div>
            <div className={dcProfileStyle.aboutText}>{props.aboutInfo.about}
            </div>
        </div>
    )
}

export default DcAbout;