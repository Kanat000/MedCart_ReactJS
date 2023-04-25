import calendarStyle from './style/calendar.module.css'
import DcSchedule from "../Profile/DoctorProfile/DcSchedule";

export default function CalendarPage() {
    return (
        <div className={calendarStyle.container}>
            <div></div>
            <div className={calendarStyle.calendarContainer}>
                <DcSchedule/>

                <div className={calendarStyle.editWeek}>
                    <button className={calendarStyle.editWeekBtn}>Edit Week Schedule</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}