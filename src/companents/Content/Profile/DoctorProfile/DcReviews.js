import dcProfileStyle from "../style/doctorProfile.module.css";
import Review from "./Review";
import DcReviewForm from "./DcReviewForm";
import {getUserId} from "../../../../Store/ActionCreator";

function DcReviews(props) {
    let reviewArr = [...props.reviews].reverse()
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Reviews</div>
            {props.dcId !== getUserId() ?
                <DcReviewForm dcId={props.dcId} setCounter={props.setCounter} counter={props.counter}/> : <div></div>}
            <div className={dcProfileStyle.dcReview}>
                {reviewArr.length !== 0 ? reviewArr.map((r) => {
                    return <Review review={r}/>
                }) : <div className={dcProfileStyle.anyReview}>There are no reviews.</div>}

            </div>
        </div>
    )
}

export default DcReviews;