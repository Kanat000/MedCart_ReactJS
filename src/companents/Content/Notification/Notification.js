import NoteStyle from './css/Notification.module.css'
import NoteBlock from "./NoteBlock";


function Notification(props) {
    debugger
    let notes = props.note.map((n, index) => {
        return <NoteBlock note={n} index={index} actions={props}/>
    })
    return (
        <div className={NoteStyle.container}>
            <div></div>
            <div className={NoteStyle.noteContainer}>
                {notes}
            </div>
            <div></div>
        </div>
    )
}

export default Notification;