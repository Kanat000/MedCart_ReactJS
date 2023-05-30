import cartStyle from './style/cart.module.css'
import MediaContent from "./MediaContent";
import Account from "./Account";
import {getUserRole} from "../../../Store/ActionCreator";

function Cart(props) {
    let imgs = String(props.record.filePath).split(' , ')
    let contentClass = ''
    if (imgs.length > 1) {
        contentClass = cartStyle.content
    }
    let pathName = window.location.pathname
    return (
        <div className={cartStyle.cart}>
            <div className={cartStyle.container}>
                <div className={cartStyle.doctor_info}>
                    <Account
                        dc={getUserRole() === 1 && pathName === '/d/history' ? props.record.patientId : props.record.doctorId}/>
                </div>
                <div className={contentClass}>
                    {imgs.map((url) => {
                        return <a href={url} target="_blank" rel="noreferrer"><MediaContent file={url}/></a>
                    })}
                </div>
                <div className={cartStyle.title}>
                    {props.record.title}
                </div>
                <div className={cartStyle.description}>
                    {props.record.specification}
                </div>
                <div className={cartStyle.others}>
                    <span>{String(props.record.createdDate).split('T')[0]}</span>
                    <span
                        style={{marginLeft: '2vw'}}>{String(String(props.record.createdDate).split('T')[1]).slice(0, -7)}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;