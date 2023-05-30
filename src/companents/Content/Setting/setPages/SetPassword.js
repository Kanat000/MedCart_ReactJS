import setAccountStyle from '../css/setaccount.module.css'
import {useState} from "react";
import {getUserId} from "../../../../Store/ActionCreator";
import {changePassword} from "../../../../service/profile.service";

function SetPassword() {
    let [disabled, setDisabled] = useState(true)
    let initialForm = {
        userId: getUserId(),
        oldPassword: '',
        newPassword: '',
        rePassword: ''
    }
    let [passwords, setPasswords] = useState(initialForm)
    return (
        <div className={setAccountStyle.container}>
            <div className={setAccountStyle.passPage}>
                <div className={setAccountStyle.formBlock}>
                    <form method='post' className={setAccountStyle.form}>
                        <label htmlFor="pass" className={setAccountStyle.label}>Current Password:</label>
                        <input type='password' className={setAccountStyle.input} id='pass'
                               placeholder='**************' value={passwords.oldPassword}
                               onChange={(e) => {
                                   setPasswords({...passwords, oldPassword: e.currentTarget.value})
                               }}/>
                        <label htmlFor="new_pass" className={setAccountStyle.label}>New Password:</label>
                        <input type='password' className={setAccountStyle.input} id='new_pass'
                               placeholder='**************' value={passwords.newPassword}
                               onChange={(e) => {
                                   setPasswords({...passwords, newPassword: e.currentTarget.value})
                               }}/>
                        <label htmlFor="re_pass" className={setAccountStyle.label}>Repeat Password:</label>
                        <input type='password' className={setAccountStyle.input} id='re_pass'
                               placeholder='**************' value={passwords.rePassword}
                               onChange={(e) => {
                                   setPasswords({...passwords, rePassword: e.currentTarget.value})
                                   setDisabled(false)
                               }}/>
                        <input type='button' className={setAccountStyle.saveBtn} value='Save Changes'
                               disabled={disabled} onClick={
                            () => {
                                changePassword(passwords).then((r) => {
                                    console.log(r)
                                    setPasswords(initialForm)
                                    setDisabled(true)
                                })
                            }
                        }/>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SetPassword;