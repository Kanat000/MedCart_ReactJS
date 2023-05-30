import appStyle from './App.module.css';
import {Provider} from 'react-redux'
import store from "./Store";
import {Redirect, Route} from "react-router-dom";
import SignUpContainer from "./companents/Login/SignUpContainer";
import SignInContainer from "./companents/Login/SignInContainer";
import Aside from "./companents/Aside/Aside";
import Main from "./companents/Content/Main/Main";

function App(props) {
    let isLogged = localStorage.getItem('user') !== null
    console.log(isLogged)
    if (!isLogged) {
        return (
            <div className={appStyle.app}>
                <Redirect
                    to={{pathname: "/signIn"}}
                />
                <Route path='/signUp'><SignUpContainer/></Route>
                <Route path='/signIn'><SignInContainer/></Route>
            </div>
        )
    }
    return (
        <div className={appStyle.app}>
            <Provider store={store}>
                <div className={appStyle.container}>
                    <Aside/>
                    <Main/>
                </div>
            </Provider>
        </div>
    );
}


export default App;
