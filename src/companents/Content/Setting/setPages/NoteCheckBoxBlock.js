import setNotificationStyle from "../css/setnotification.module.css";


function NoteCheckBoxBlock(props) {
    return (
        <div className={setNotificationStyle.itemBlock}>
            <div className={setNotificationStyle.itemName}>
                {props.note.name}
            </div>
            <div className={setNotificationStyle.itemAction}>
                <input type='checkbox' className={setNotificationStyle.checkbox} checked={props.note.checked}
                       onChange={() => props.setNoteCheckBox(props.index)}/>
            </div>
        </div>
    )
}

export default NoteCheckBoxBlock;