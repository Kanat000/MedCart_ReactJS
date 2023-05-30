import setIntegrationStyle from '../css/setIntegration.module.css'
import setAccountStyle from "../css/setaccount.module.css";
import LoadingPage from "../../Main/LoadingPage";
import {useState} from "react";
import {changeEmail, changePhone} from "../../../../service/profile.service";
import {getUserId} from "../../../../Store/ActionCreator";

function SetIntegration(props) {
    let [phone, setPhone] = useState(props.phone)
    let [email, setEmail] = useState(props.email)
    let [phoneBtnDisabled, setPhoneBtnDisabled] = useState(true)
    let [emailBtnDisabled, setEmailBtnDisabled] = useState(true)
    if (!props.loading) {
        return (<div className={setIntegrationStyle.container}>
                <div className={setIntegrationStyle.frameContainer}>
                    <div className={setIntegrationStyle.frame}>
                        <label htmlFor="phone" className={setAccountStyle.label}>Phone Number:</label>
                        <input type='text' className={setAccountStyle.input}
                               id='phone'
                               value={phone} onChange={(e) => {
                            setPhone(e.currentTarget.value)
                            setPhoneBtnDisabled(false)
                        }}/>
                        <button className={setAccountStyle.saveBtn} disabled={phoneBtnDisabled}
                                style={{marginTop: "5vh"}} onClick={() => {
                            changePhone(getUserId(), phone).then((r) => {
                                console.log(r)
                                setPhoneBtnDisabled(true)
                            })
                        }}>Change phone number
                        </button>
                    </div>
                </div>
                <div className={setIntegrationStyle.frameContainer}>
                    <div className={setIntegrationStyle.frame}>
                        <label htmlFor="email" className={setAccountStyle.label}>Email address:</label>
                        <input type='text' className={setAccountStyle.input}
                               id='email'
                               placeholder='example@gmail.com' value={email}
                               onChange={(e) => {
                                   setEmail(e.currentTarget.value)
                                   setEmailBtnDisabled(false)
                               }}/>
                        <button className={setAccountStyle.saveBtn} disabled={emailBtnDisabled}
                                style={{marginTop: "5vh"}} onClick={() => {
                            changeEmail(getUserId(), email).then((r) => {
                                console.log(r)
                                setEmailBtnDisabled(true)
                            })
                        }}>Change email address
                        </button>
                    </div>
                </div>
            </div>)
    } else {
        return (<div className={setIntegrationStyle.container}>
                <div className={setIntegrationStyle.frameContainer}>
                    <div className={setIntegrationStyle.frame}>
                        <LoadingPage/>
                    </div>
                </div>
                <div className={setIntegrationStyle.frameContainer}>
                    <div className={setIntegrationStyle.frame}>
                        <LoadingPage/>
                    </div>
                </div>
            </div>)
    }

}

export default SetIntegration;