import SignUp from "./SignUp";
import {useState} from "react";
import {register} from "../../service/auth.service";
import {useHistory} from "react-router-dom";
import storage from "./firebase/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";


function SignUpContainer() {
    let history = useHistory()

    let defaultUserInfo = {
        role: '2',
        fullName: "",
        phone: "",
        iin: "",
        email: "",
        pass: "",
        re_pass: "",
        city: "",
        address: "",
        specialization: "",
        clinic: "",
        profile_img: "",
        experience: "",
        about: ""
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
            case 'city':
                setSignUpState({...signUpState, city: e.currentTarget.value})
                break;
            case 'address':
                setSignUpState({...signUpState, address: e.currentTarget.value})
                break;
            case 'speciality':
                setSignUpState({...signUpState, specialization: e.currentTarget.value})
                break;
            case 'clinic':
                setSignUpState({...signUpState, clinic: e.currentTarget.value})
                break;
            case 'profile_img':
                setSignUpState({...signUpState, profile_img: e.currentTarget.files[0]})
                break;
            case 'experience':
                setSignUpState({...signUpState, experience: e.currentTarget.value})
                break;
            case 'about':
                setSignUpState({...signUpState, about: e.currentTarget.value})
                break;
            default:
                break;
        }
    }

    let saveInfo = (state) => {
        let profile_img = state.profile_img
        if (profile_img === "") {
            let photo_url = "https://firebasestorage.googleapis.com/v0/b/medcart-9a04d.appspot.com/o/default_user_img.jpg?alt=media&token=93921dad-19a6-4c8a-b2a3-b16a7ec54e76"
            register(state, photo_url)
            history.push('/signIn')
        } else {
            const storageRef = ref(storage, `/files/${profile_img.name}`)
            const uploadTask = uploadBytesResumable(storageRef, profile_img);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        register(state, url)
                        history.push('/signIn')
                    });
                }
            );
        }

    }

    return <SignUp state={signUpState}
                   setState={inputChanges}
                   saveInfo={saveInfo}
    />
}

export default SignUpContainer