import setAccountStyle from '../css/setaccount.module.css'

function SetPassword() {

    return (
        <div className={setAccountStyle.container}>
            <div className={setAccountStyle.passPage}>
                <div className={setAccountStyle.formBlock}>
                    <form method='post' className={setAccountStyle.form}>
                        <label htmlFor="pass" className={setAccountStyle.label}>Current Password:</label>
                        <input type='password' className={setAccountStyle.input} id='pass'
                               placeholder='**************'/>
                        <label htmlFor="new_pass" className={setAccountStyle.label}>New Password:</label>
                        <input type='password' className={setAccountStyle.input} id='new_pass'
                               placeholder='**************'/>
                        <label htmlFor="re_pass" className={setAccountStyle.label}>Repeat Password:</label>
                        <input type='password' className={setAccountStyle.input} id='re_pass'
                               placeholder='**************'/>
                        <input type='button' className={setAccountStyle.saveBtn} value='Save Changes'/>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default SetPassword;