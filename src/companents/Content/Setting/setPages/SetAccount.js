import setAccountStyle from '../css/setaccount.module.css'
import {Link} from "react-router-dom";
import profile_img from '../../../../assets/imgs/profile_img.jpg'
import {useState} from "react";

function SetAccount(props) {
    const profile = props.profile
    const [accountState, setAccountState] = useState(profile)
    const [disabled, setDisabled] = useState(true)

    let changeInfo = (e, field) => {
        setDisabled(false)
        let value = e.currentTarget.value
        if (field === 'city') setAccountState({...accountState, city: value})
        else if (field === 'address') setAccountState({...accountState, address: value})
    }
    return (
        <div className={setAccountStyle.container}>
            <div className={setAccountStyle.frame}>
                <div className={setAccountStyle.mainInfo}>
                    <div className={setAccountStyle.photoBlock}>
                        <div className={setAccountStyle.photo}>
                            <img src={profile_img} alt={profile.full_name} className={setAccountStyle.Img}/>
                        </div>
                    </div>
                    <div className={setAccountStyle.fullNameBlock}>
                        <div className={setAccountStyle.fullName}>{profile.full_name}</div>
                        <div className={setAccountStyle.changePhoto}><Link to='/changePhoto'>Change profile photo</Link>
                        </div>
                    </div>
                </div>
                <div className={setAccountStyle.otherInfo}>
                    <div className={setAccountStyle.formBlock}>
                        <form method='post' className={setAccountStyle.form}>
                            <label htmlFor="city" className={setAccountStyle.label}>City:</label>
                            <input className={setAccountStyle.input} id='city' value={accountState.city}
                                   onChange={(e) => changeInfo(e, 'city')}/>
                            <label htmlFor="city" className={setAccountStyle.label}>Address:</label>
                            <input className={setAccountStyle.input} id='address' value={accountState.address}
                                   onChange={(e) => changeInfo(e, 'address')}/>
                            <label htmlFor="city" className={setAccountStyle.label}>IIN:</label>
                            <input className={[setAccountStyle.input, setAccountStyle.closed].join(' ')} readOnly
                                   id='city'
                                   value={profile.iin}/>

                            <button className={setAccountStyle.saveBtn}
                                    disabled={disabled}
                                    onClick={() => {
                                        setDisabled(true)
                                        props.updateProfileInfo(accountState)
                                    }}>Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SetAccount;