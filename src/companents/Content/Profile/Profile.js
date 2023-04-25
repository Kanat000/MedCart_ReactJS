import profileStyle from './style/profile.module.css'
import ImgProfile from "./ImgProfile";
import TextInfoProfile from "./TextInfoProfile";
import {useSelector} from "react-redux";
import Cart from "./Cart";


function Profile() {
    const state = useSelector((state) => state.profileReducer)
    let carts = state.records.map(r => {
        return <Cart cart={r}/>
    })
    return (
        <div className={profileStyle.profile}>
            <div></div>
            <div>
                <div className={profileStyle.mainInfo}>
                    <ImgProfile img={state.profile_img}/>
                    <TextInfoProfile profile={state}/>
                </div>
                <div className={profileStyle.cartInfo}>
                    {carts}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Profile;