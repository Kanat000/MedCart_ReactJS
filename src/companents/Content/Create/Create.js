import createStyle from './style/create.module.css'
import {useState} from "react";
import {getUserFullName, getUserId} from "../../../Store/ActionCreator";
import FileUploader from "./FileUploader";
import FileResultBox from "./FileResultBox";
import {createRecord} from "../../../service/record.service";
import PatientSearchInput from "./PatientSearchInput";
import {createNotificationForDoctor, createNotificationForPatient} from "../../../service/notification.service";

function Create(props) {
    let [record, setRecord] = useState({
        patient_id: '',
        patient_FullName: '',
        title: '',
        description: '',
        file: '',
        created_date: '',
        created_time: '',
        isSecret: false,
        doctor_id: getUserId()
    })
    let [isUploaded, SetIsUploaded] = useState(false)
    let [fileNameArr, SetFileNameArr] = useState([])
    let [fileUrl, SetFileUrl] = useState([])

    let fileUploadFinish = (url, fileInfo) => {
        fileNameArr.push(fileInfo.name)
        SetFileNameArr(fileNameArr)
        fileUrl.push(url)
        SetFileUrl(fileUrl)
        setRecord({...record, file: fileUrl.join(' , ')})
    }
    return (
        <div className={createStyle.container}>
            <div></div>
            <div className={createStyle.formContainer}>
                <div className={createStyle.form}>
                    <label className={createStyle.label} htmlFor='patient'>Choose a patient:</label>
                    {/*<input type='text' className={createStyle.sampleInput} id='patient'/>*/}
                    <PatientSearchInput patients={props.patients} getPatientBySearch={props.getPatientBySearch}
                                        setRecord={setRecord} record={record}/>
                    <label className={createStyle.label}>Upload a file:</label>
                    {isUploaded ? <FileResultBox fileNames={fileNameArr}/> :
                        <FileUploader fileUploadFinish={fileUploadFinish} setIsUploaded={SetIsUploaded}
                                      setRecord={setRecord} record={record}/>}

                    <label className={createStyle.label} htmlFor='record_title'>Write a title of the medical
                        record:</label>
                    <input type='text' className={createStyle.sampleInput} id='record_title' value={record.title}
                           onChange={(e) => {
                               setRecord({...record, title: e.currentTarget.value})
                           }}/>

                    <label className={createStyle.label} htmlFor='record_description'>Write a specification of the
                        medical record:</label>
                    <textarea className={createStyle.textarea} id='record_description' value={record.description}
                              onChange={(e) => {
                                  setRecord({...record, description: e.currentTarget.value})
                                  console.log(record)
                              }}/>

                    <label className={createStyle.label} htmlFor='isSecret'>Can the patient see this card?</label>

                    <select className={createStyle.select} id='isSecret' onChange={(e) => {
                        setRecord({...record, isSecret: Boolean(e.currentTarget.value)})
                    }}>
                        <option selected='selected' value={false}>Yes, of course, it's not a secret</option>
                        <option value={true}>No, it's secret</option>
                    </select>
                    <button className={createStyle.createBtn} onClick={() => {
                        createRecord(record).then(r => console.log(r))
                        console.log(record)
                        console.log(getUserFullName())
                        if (!record.isSecret) {
                            createNotificationForPatient(record.patient_id, record.doctor_id, getUserFullName(), record.title).then((r) => console.log(r))
                        }
                        createNotificationForDoctor(record.doctor_id, record.patient_id, record.patient_FullName, record.title).then((r) => console.log(r))
                        window.location.reload()
                    }}>Create
                    </button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Create;