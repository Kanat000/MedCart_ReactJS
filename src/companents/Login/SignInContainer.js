import {useState} from "react";
import SignIn from "./SignIn";
import {login} from "../../service/auth.service";
import {useHistory} from "react-router-dom";


function SignInContainer() {
    let history = useHistory()
    let defaultUserInfo = {
        email: '',
        password: ''
    }
    let [signInState, setSignInState] = useState(defaultUserInfo)
    let inputChanges = (e, field) => {
        switch (field) {
            case 'email':
                setSignInState({...signInState, email: e.currentTarget.value})
                break;
            case 'password':
                setSignInState({...signInState, password: e.currentTarget.value})
                break;
            default:
                break;
        }
    }
    let sendInfo = (state) => {
        // if (login(state).length !== 0) {
        //     let isPatient = JSON.parse(localStorage.getItem('user')).role === 'patient'
        //     if (isPatient) history.push('/h/doctors')
        //     else history.push('/h/d/patients')
        //     window.location.reload()
        //     console.log(usersAuth)
        // }
        login(state).then((r) => {
            console.log(r)
            let isPatient = JSON.parse(localStorage.getItem('user')).role === 2
            if (isPatient) history.push('/h/doctors')
            else history.push('/h/d/patients')
            window.location.reload()
        })
    }
    return <SignIn state={signInState}
                   setState={inputChanges}
                   sendInfo={sendInfo}
    />
}

export default SignInContainer