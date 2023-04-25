import NoteStyle from './css/Notification.module.css'

function ActionButtons(props) {
    return (
        <div className={NoteStyle.actionButtons}>
            <button className={NoteStyle.set_aside} onClick={() => props.actions.changeSetAsideStatus(props.index)}>Set
                Aside
            </button>
            <button className={NoteStyle.done} onClick={() => props.actions.changeDoneStatus(props.index)}>Done
            </button>
        </div>
    )
}

export default ActionButtons;