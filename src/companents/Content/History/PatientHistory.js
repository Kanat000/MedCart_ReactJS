import dcProfileStyle from "../Profile/style/doctorProfile.module.css";
import {useState} from "react";
import {getPatientHistory} from "../../../service/record.service";
import {getUserId} from "../../../Store/ActionCreator";
import Review from "../Profile/DoctorProfile/Review";
import LoadingPage from "../Main/LoadingPage";

function PatientHistory() {
    let [reviewList, setReviewList] = useState({data: [], loading: true})
    useEffect(() => {
        getPatientHistory(getUserId()).then((response) => {
            let reviewArr = response.data.map((review) => {
                    return <Review review={review}/>
                }
            )
            setReviewList({...reviewList, data: [...reviewArr].reverse(), loading: false})
        })
    }, [])
    return (
        <div className={dcProfileStyle.container}>
            <div></div>
            <div className={dcProfileStyle.frame} style={{marginTop: "10vh"}}>
                {!reviewList.loading ? (reviewList.data.length > 0 ? reviewList.data :
                        <div style={{textAlign: 'center'}}>You have not left any feedback</div>) :
                    <div style={{minHeight: '70vh', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                        <LoadingPage/>
                    </div>}
            </div>
            <div></div>
        </div>
    )
}

export default PatientHistory
