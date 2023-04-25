import dcProfileStyle from "../style/doctorProfile.module.css";
import Review from "./Review";

function DcReviews() {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Reviews</div>
            <div className={dcProfileStyle.dcReview}>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    )
}

export default DcReviews;