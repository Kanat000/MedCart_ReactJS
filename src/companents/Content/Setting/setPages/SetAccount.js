import setAccountStyle from '../css/setaccount.module.css'
import {useEffect, useState} from "react";
import LoadingPage from "../../Main/LoadingPage";
import {Link} from "react-router-dom";
import pr_IMG from '../../../../assets/imgs/profile/default_user_img.jpg'
import {updateProfileInfo} from "../../../../service/profile.service";
import DoctorSettingForm from "../DoctorSettingForm";
import {cities} from "../../../../Store/SelectDatas";


function SetAccount(props) {
    const [accountState, setAccountState] = useState(props.profile.data)
    useEffect(() => {
        setAccountState(props.profile.data)
    }, [props])
    let cityOptions = cities.map((city) => {
        return <option value={city}>{city}</option>
    })
    const [disabled, setDisabled] = useState(true)
    let changeInfo = (e, field) => {
        setDisabled(false)
        let value = e.currentTarget.value
        switch (field) {
            case 'city':
                setAccountState({...accountState, city: value});
                break;
            case 'address':
                setAccountState({...accountState, address: value});
                break;
            case 'about':
                setAccountState({...accountState, about: value});
                break;
            case 'clinic':
                setAccountState({...accountState, clinicId: value});
                break;
            case 'speciality':
                setAccountState({...accountState, specialization: value});
                break;
            case 'experience':
                setAccountState({...accountState, experience: value});
                break;
            case 'photo':
                setAccountState({...accountState, photo: value});
                break;
        }
    }
    if (!props.loading) {
        let data = props.profile.data
        return (
            <div className={setAccountStyle.container}>
                <div className={setAccountStyle.frame}>
                    <div className={setAccountStyle.mainInfo}>
                        <div className={setAccountStyle.photoBlock}>
                            <div className={setAccountStyle.photo}>
                                <img src={pr_IMG} alt={data.fullName} className={setAccountStyle.Img}/>
                            </div>
                        </div>
                        <div className={setAccountStyle.fullNameBlock}>
                            <div className={setAccountStyle.fullName}>{data.fullName}</div>
                            <div className={setAccountStyle.changePhoto}><Link to='/changePhoto'>Change profile
                                photo</Link>
                            </div>
                        </div>
                    </div>
                    <div className={setAccountStyle.otherInfo}>
                        <div className={setAccountStyle.formBlock}>
                            <form method='post' className={setAccountStyle.form}>
                                <label htmlFor="city" className={setAccountStyle.label}>City:</label>
                                <select id='city' className={setAccountStyle.input}
                                        onChange={(e) => changeInfo(e, 'city')}
                                        value={accountState.city}>
                                    {cityOptions}
                                </select>
                                <label htmlFor="city" className={setAccountStyle.label}>Address:</label>
                                <input className={setAccountStyle.input} id='address' value={accountState.address}
                                       onChange={(e) => changeInfo(e, 'address')}/>

                                {accountState.role === 1 ?
                                    <DoctorSettingForm accountState={accountState} changeInfo={changeInfo}/> :
                                    <div></div>}
                                <label htmlFor="city" className={setAccountStyle.label}>IIN:</label>
                                <input className={[setAccountStyle.input, setAccountStyle.closed].join(' ')} readOnly
                                       id='city'
                                       value={data.iin}/>

                                <button className={setAccountStyle.saveBtn}
                                        disabled={disabled}
                                        onClick={() => {
                                            setDisabled(true)
                                            updateProfileInfo(accountState).then(r => console.log(r))
                                            window.location.reload()
                                        }}>Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={setAccountStyle.container}>
                <LoadingPage/>
            </div>
        )
    }
}

export default SetAccount;