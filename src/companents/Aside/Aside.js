import asideStyle from './style/aside.module.css'
import MenuWithRouter from "./Menu";


let Aside = () => {
    return (
        <div className={asideStyle.aside}>
            <div className={asideStyle.container}>
                <div className={asideStyle.logo}>
                    MedCart
                </div>
                <div className={asideStyle.menu}>
                    <MenuWithRouter/>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Aside;