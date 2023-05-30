import NoteStyle from './css/Notification.module.css'
import NoteBlock from "./NoteBlock";
import {useEffect, useState} from "react";
import {getUserId} from "../../../Store/ActionCreator";
import LoadingPage from "../Main/LoadingPage";


function Notification(props) {
    let [Loading, SetLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            props.GetNotificationData(getUserId(), SetLoading)
        }, 1000)
    }, [])

    let notes = [...props.note.data].reverse().map((n) => {
        return <NoteBlock note={n}/>
    })
    if (!Loading) {
        console.log(props)
        return (
            <div className={NoteStyle.container}>
                <div></div>
                <div className={NoteStyle.noteContainer}>
                    {notes.length > 0 ? notes :
                        <div style={{
                            background: "white",
                            display: "grid",
                            justifyContent: 'center',
                            alignItems: "center",
                            height: "15vh"
                        }}>You don't have any
                            notification.</div>}
                </div>
                <div></div>
            </div>
        )
    } else {
        return <LoadingPage/>
    }
}

export default Notification;