import signInStyle from './css/signIn.module.css'
import welcome_img_sign_in from './imgs/medical-records-request.png'
import {Link, Route} from "react-router-dom";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import LastStep from "./LastStep";
import AboutStep from "./AboutStep";

function SignUp(props) {
    return (
        <div className={signInStyle.pageContainer}>
            <div className={signInStyle.container}>
                <div className={signInStyle.imgGrid}>
                    <div className={signInStyle.imgBlock}>
                        <img src={welcome_img_sign_in} className={signInStyle.welcome_img}/>
                    </div>
                </div>
                <div className={signInStyle.formGrid}>
                    <div className={signInStyle.formBlock}>
                        <div className={signInStyle.title}>Sign Up</div>
                        <div className={signInStyle.form}>
                            <Route exact path='/signUp/step-1'><FirstStep state={props.state}
                                                                          setState={props.setState}/></Route>
                            <Route path='/signUp/step-2'><SecondStep state={props.state}
                                                                     setState={props.setState}/></Route>
                            <Route path='/signUp/step-3'><ThirdStep state={props.state}
                                                                    setState={props.setState}/></Route>
                            <Route path='/signUp/step-4'><FourthStep state={props.state}
                                                                     setState={props.setState}
                                                                     saveInfo={props.saveInfo}/></Route>
                            <Route path='/signUp/step-5'><LastStep state={props.state}
                                                                   setState={props.setState}/></Route>
                            <Route path='/signUp/step-6'><AboutStep state={props.state}
                                                                    setState={props.setState}
                                                                    saveInfo={props.saveInfo}/></Route>
                            {/*<div className={signInStyle.error}>Incorrect email address</div>*/}
                            <div className={signInStyle.otherAction}><Link to='/signIn'>Sign In</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;