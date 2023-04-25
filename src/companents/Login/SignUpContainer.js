import SignUp from "./SignUp";
import {useState} from "react";
import {register} from "../../service/auth.service";
import {useHistory} from "react-router-dom";


function SignUpContainer() {
    let history = useHistory()

    let defaultUserInfo = {
        role: '2',
        fullName: "",
        phone: "",
        iin: "",
        email: "",
        pass: "",
        re_pass: ""
    }
    let [signUpState, setSignUpState] = useState(defaultUserInfo)
    let inputChanges = (e, field) => {
        switch (field) {
            case 'role':
                setSignUpState({...signUpState, role: e.currentTarget.value})
                break
            case 'fullName':
                setSignUpState({...signUpState, fullName: e.currentTarget.value})
                break;
            case 'phone_number':
                setSignUpState({...signUpState, phone: e.currentTarget.value})
                break;
            case 'IIN':
                setSignUpState({...signUpState, iin: e.currentTarget.value})
                break;
            case 'email':
                setSignUpState({...signUpState, email: e.currentTarget.value})
                break;
            case 'pass':
                setSignUpState({...signUpState, pass: e.currentTarget.value})
                break;
            case 're-pass':
                setSignUpState({...signUpState, re_pass: e.currentTarget.value})
                break;
            default:
                break;
        }
    }

    let saveInfo = (state) => {
        register(state).then((r) => {
            if (r.status === 200) {
                console.log('redirect')
                history.push('/signIn')
            }
        })
    }

    return <SignUp state={signUpState}
                   setState={inputChanges}
                   saveInfo={saveInfo}
    />
}

export default SignUpContainer