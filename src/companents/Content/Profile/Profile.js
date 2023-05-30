import LoadingPage from "../Main/LoadingPage";
import {useEffect, useState} from "react";
import profileStyle from './style/profile.module.css'
import ImgProfile from "./ImgProfile";
import TextInfoProfile from "./TextInfoProfile";
import DefaultRecordBlock from "./DefaultRecordBlock";
import Cart from "./Cart";
import {getUserId} from "../../../Store/ActionCreator";

function Profile(props) {
    let [loading, setLoading] = useState(true)
    let isProfile = props.userId === getUserId()
    useEffect(() => {
        try {
            setTimeout(() => {
                props.getUserData(props.userId, setLoading)
                props.getPatientRecord(props.userId)
            }, 1000)
        } catch (e) {
            console.log(e)
        }
    }, [])

    if (!loading) {
        let records = props.profile.record
        let carts = <DefaultRecordBlock/>
        if (records.length !== 0) {
            if (isProfile) {
                carts = records.filter((r) => !r.isAvail).map((record) => {
                    return <Cart record={record}/>
                })
            } else {
                carts = records.map((record) => {
                    return <Cart record={record}/>
                })
            }
        }

        return (
            <div className={profileStyle.profile}>
                <div></div>
                <div>
                    <div className={profileStyle.mainInfo}>
                        <ImgProfile photo={props.profile.data.photo}/>
                        <TextInfoProfile profile={props.profile.data}/>
                    </div>
                    <div className={profileStyle.cartInfo}>
                        {carts}
                    </div>
                </div>
                <div></div>
            </div>
        )
    } else {
        return (
            <LoadingPage/>
        )
    }
}

export default Profile;