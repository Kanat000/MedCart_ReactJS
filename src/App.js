import appStyle from './App.module.css';
import Container from "./Container";
import {Provider} from 'react-redux'
import store from "./Store";
import {Redirect, Route} from "react-router-dom";
import SignUpContainer from "./companents/Login/SignUpContainer";
import SignInContainer from "./companents/Login/SignInContainer";

function App(props) {
    let isLogged = localStorage.getItem('user') !== null
    console.log(isLogged)
    if (!isLogged) {
        return (
            <div className={appStyle.app}>
                <Redirect
                    to={{pathname: "/signUp/step-1"}}
                />
                <Route path='/signUp'><SignUpContainer/></Route>
                <Route path='/signIn'><SignInContainer/></Route>
            </div>
        )
    }
    return (
        <div className={appStyle.app}>
            <Provider store={store}><Container/></Provider>
        </div>
    );
}


export default App;
