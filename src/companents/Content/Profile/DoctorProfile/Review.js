import reviewStyle from '../style/review.module.css'
import accountStyle from "../style/account.module.css";
import doctor_img from "../../../../assets/imgs/doctor_img.jpg";
import {Rating} from "react-simple-star-rating";

function Review() {
    return (
        <div className={reviewStyle.review}>
            <div className={reviewStyle.header}>
                <div className={accountStyle.imgGrid}>
                    <div className={accountStyle.imgBlock}><img src={doctor_img} alt={doctor_img.name}
                                                                className={accountStyle.img}/></div>
                </div>
                <div className={accountStyle.fullNameGrid}>
                    <span>Andrey Sergeyov</span>
                </div>
                <div className={reviewStyle.date}>12:02 15/04/2023</div>
                <div className={reviewStyle.rating}><Rating size="3.5vh"/></div>
            </div>
            <div className={reviewStyle.body}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi assumenda cumque debitis dolore
                eveniet expedita explicabo illo iure magnam maiores non nostrum nulla odio perspiciatis placeat possimus
                quaerat quo sequi ut veniam, vero, voluptatem voluptatum? Asperiores assumenda consequatur dolore
                laudantium maxime neque nulla placeat, sed, soluta, ut vero voluptate.
            </div>
        </div>
    )
}

export default Review;