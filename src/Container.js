import appStyle from "./App.module.css";
import Aside from "./companents/Aside/Aside";
import Main from "./companents/Content/Main/Main";


let Container = () => {
    return (
        <div className={appStyle.container}>
            <Aside/>
            <Main/>
        </div>
    )
}
export default Container;