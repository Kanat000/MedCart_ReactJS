import profileStyle from "../Profile/style/profile.module.css";
import {useState} from "react";
import {getDoctorHistory} from "../../../service/record.service";
import {getUserId} from "../../../Store/ActionCreator";
import Cart from "../Profile/Cart";
import LoadingPage from "../Main/LoadingPage";


function DoctorHistory() {
    let [recordList, setRecordList] = useState({data: [], loading: true})
    useState(() => {
        getDoctorHistory(getUserId()).then((response) => {
            let recordArr = response.data.map((record) => {
                    return <Cart record={record}/>
                }
            )
            setRecordList({...recordList, data: recordArr, loading: false})
        })
    }, [])
    console.log(recordList)
    return (
        <div className={profileStyle.profile}>
            <div></div>
            <div style={{marginTop: '10vh'}}>
                <div className={profileStyle.cartInfo}>{
                    !recordList.loading ? recordList.data
                        : <div
                            style={{minHeight: '70vh', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                            <LoadingPage/></div>
                }</div>
            </div>
            <div></div>
        </div>
    )
}

export default DoctorHistory