import cartStyle from './style/cart.module.css'

function MediaContent(props) {
    console.log(props)
    return (
        <div className={cartStyle.media}>
            <img src={props.r_img} className={cartStyle.media_img} alt='media'/>
        </div>
    )
}

export default MediaContent