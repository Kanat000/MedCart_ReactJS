import imgStyle from "./style/imgProfile.module.css";

function ImgProfile(props) {
    return (
        <div className={imgStyle.imgContainer}>
            <div className={imgStyle.imgBlock}>
                <img src={props.photo} className={imgStyle.img} alt={props.img}/>
            </div>
        </div>
    )
}

export default ImgProfile;