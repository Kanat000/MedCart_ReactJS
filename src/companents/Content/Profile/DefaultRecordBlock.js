import cartStyle from "./style/cart.module.css";


function DefaultRecordBlock() {
    return (
        <div className={cartStyle.cart}>
            <div className={cartStyle.container} style={{display: "grid", justifyContent: "center"}}>
                You don't have any records yet.
            </div>
        </div>
    )
}

export default DefaultRecordBlock;