import accountStyle from './style/account.module.css'

function Account(props) {
    return (
        <div className={accountStyle.container}>
            <div className={accountStyle.imgGrid}>
                <div className={accountStyle.imgBlock}><img src={props.dc.img} alt='#'
                                                            className={accountStyle.img}/></div>
            </div>
            <div className={accountStyle.fullNameGrid}>
                <span>{props.dc.full_name}</span>
            </div>
            <div className={accountStyle.followGrid}>
                <button className={accountStyle.followBtn}>View Profile</button>
            </div>
        </div>
    )
}

export default Account;