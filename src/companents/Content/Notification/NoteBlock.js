import NoteStyle from './css/Notification.module.css'
import ActionButtons from "./ActionButtons";
import DoneButton from "./DoneButton";

function NoteBlock(props) {
    let createActionBtn = (note, actions, index) => {
        if (note.feedback && !note.done) {
            return <ActionButtons actions={actions} index={index}/>
        } else if (note.feedback && note.done) {
            return <DoneButton/>
        } else return ''
    }
    return (
        <div className={NoteStyle.noteBlock}>
            <div></div>
            <div>
                <div className={NoteStyle.header}>
                    <div className={NoteStyle.noteTitle}>{props.note.title}</div>
                    <div className={NoteStyle.datetime}><span>{props.note.time}</span><span>{props.note.date}</span>
                    </div>
                </div>
                <div className={NoteStyle.noteDescription}>{props.note.description}</div>
                <div className={NoteStyle.actions}>
                    {createActionBtn(props.note, props.actions, props.index)}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default NoteBlock;