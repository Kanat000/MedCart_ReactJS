import setIntegrationStyle from '../css/setIntegration.module.css'
import setAccountStyle from "../css/setaccount.module.css";

function SetIntegration() {

    return (
        <div className={setIntegrationStyle.container}>
            <div className={setIntegrationStyle.frameContainer}>
                <div className={setIntegrationStyle.frame}>
                    <label htmlFor="phone" className={setAccountStyle.label}>Phone Number:</label>
                    <input type='text' className={setAccountStyle.input} id='phone'
                           value='87758589596'/>
                    <button className={setIntegrationStyle.verify}>Verify phone number</button>
                </div>
            </div>
            <div className={setIntegrationStyle.frameContainer}>
                <div className={setIntegrationStyle.frame}>
                    <label htmlFor="email" className={setAccountStyle.label}>Email address:</label>
                    <input type='text' className={setAccountStyle.input} id='email'
                           placeholder='example@gmail.com'/>
                    <button className={setIntegrationStyle.verify}>Verify email address</button>
                </div>
            </div>
        </div>
    )

}

export default SetIntegration;