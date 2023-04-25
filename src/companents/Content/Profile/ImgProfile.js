import imgStyle from "./style/imgProfile.module.css";
import profile_img from '../../../assets/imgs/profile_img.jpg'

function ImgProfile(props) {
    return (
        <div className={imgStyle.imgContainer}>
            <div className={imgStyle.imgBlock}>
                <img src={profile_img} className={imgStyle.img} alt={props.img}/>
            </div>
        </div>
    )
}

export default ImgProfile;