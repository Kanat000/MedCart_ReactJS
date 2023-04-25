import {Redirect} from "react-router-dom";

function LogOut() {
    localStorage.removeItem('user')
    console.log(localStorage)
    return <Redirect to='/signIn'/>
}

export default LogOut