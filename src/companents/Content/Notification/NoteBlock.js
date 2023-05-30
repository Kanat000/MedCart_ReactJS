import NoteStyle from './css/Notification.module.css'
import {Link} from "react-router-dom";
import {getUserRole} from "../../../Store/ActionCreator";


function ReformatText(noteText, record_title, id, fullName) {
    if (getUserRole() === 1) {
        return <div
            className={NoteStyle.noteDescription}>{noteText.split('{')[0]}<b>{record_title}</b>{noteText.split('}')[1].split('[')[0]}
            <Link to={'/patientProfile/' + id}><b>{fullName}</b></Link>{noteText.split(']')[1]}
        </div>
    } else {
        return <div
            className={NoteStyle.noteDescription}>{noteText.split('[')[0]}<Link
            to={'/doctorProfile/' + id}><b>{fullName}</b></Link>
            {noteText.split(']')[1].split('{')[0]}<b>{record_title}</b>{noteText.split('}')[1]}
        </div>
    }
}

function NoteBlock(props) {
    let noteText = props.note.notification
    let dateArr = props.note.createdDate.split('T')
    let record_title = noteText.split('{').pop().split('}')[0]
    let id = noteText.split('[').pop().split(']')[0].split(',')[0]
    let fullName = noteText.split('[').pop().split(']')[0].split(',')[1]
    // let createActionBtn = (note, actions, index) => {
    //     if (note.feedback && !note.done) {
    //         return <ActionButtons actions={actions} index={index}/>
    //     } else if (note.feedback && note.done) {
    //         return <DoneButton/>
    //     } else return ''
    // }
    return (
        <div className={NoteStyle.noteBlock}>
            <div></div>
            <div>
                <div className={NoteStyle.header}>
                    <div
                        className={NoteStyle.noteTitle}>{getUserRole() === 1 ? <span>Record Created <span
                        style={{color: "green"}}>Successfully</span>
                    </span> : "A new record has been created for you."}</div>
                    <div className={NoteStyle.datetime}>
                        <span>{dateArr[1].slice(0, -7)}</span><span>{dateArr[0]}</span>
                    </div>
                </div>
                {ReformatText(noteText, record_title, id, fullName)}
                {/*<div className={NoteStyle.actions}>*/}
                {/*    {createActionBtn(props.note, props.actions, props.index)}*/}
                {/*</div>*/}
            </div>
            <div></div>
        </div>
    )
}

export default NoteBlock;