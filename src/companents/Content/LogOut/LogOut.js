import {useHistory} from "react-router-dom";

function LogOut() {
    let history = useHistory()
    localStorage.removeItem('user')
    history.push('/signIn')
    window.location.reload()

}

export default LogOut