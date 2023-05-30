import dcProfileStyle from "../style/doctorProfile.module.css";
import {Rating} from "react-simple-star-rating";
import {useState} from "react";
import {getUserId} from "../../../../Store/ActionCreator";
import {createReview} from "../../../../service/profile.service";

function DcReviewForm(props) {
    let reviewInitialState = {
        reviewText: '',
        rating: 0,
        doctorId: props.dcId,
        patientId: getUserId()
    }
    let [review, setReview] = useState(reviewInitialState)

    return (
        <div className={dcProfileStyle.reviewFormContainer}>
            <div className={dcProfileStyle.inputGrid}>
                <div>
                    <textarea className={dcProfileStyle.textArea} placeholder="Write your review here." id='review'
                              value={review.reviewText}
                              onChange={(e) => setReview({...review, reviewText: e.currentTarget.value})}/>
                </div>
                <div className={dcProfileStyle.reviewInputContainer}>
                    <div className={dcProfileStyle.reviewRatingContainer}><Rating size="3.5vh"
                                                                                  initialValue={review.rating}
                                                                                  onClick={(e) => setReview({
                                                                                      ...review,
                                                                                      rating: (e * 2)
                                                                                  })}/></div>
                    <div className={dcProfileStyle.reviewBtnContainer}>
                        <button className={dcProfileStyle.reviewBtn} onClick={() => {
                            console.log(review)
                            createReview(review).then((response) => {
                                console.log(response)
                                props.setCounter(props.counter + 1)
                                setReview(reviewInitialState)
                            })
                        }}>Leave feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DcReviewForm