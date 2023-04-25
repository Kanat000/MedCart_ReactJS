import cartStyle from './style/cart.module.css'
import MediaContent from "./MediaContent";
import Account from "./Account";

function Cart(props) {
    return (
        <div className={cartStyle.cart}>
            <div className={cartStyle.container}>
                <div className={cartStyle.doctor_info}>
                    <Account dc={props.cart.doctor}/>
                </div>
                <div className={cartStyle.content}>
                    <MediaContent r_img={props.cart.record_img}/>
                </div>
                <div className={cartStyle.title}>
                    {props.cart.title}
                </div>
                <div className={cartStyle.description}>
                    {props.cart.description}
                </div>
                <div className={cartStyle.others}>
                    <span>{props.cart.date} {props.cart.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;