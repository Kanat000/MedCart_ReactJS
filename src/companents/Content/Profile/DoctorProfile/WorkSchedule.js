import dcScheduleStyle from "../style/dcSchedule.module.css";
import DaySchedule from "./DaySchedule";


function WorkSchedule() {
    return (
        <div className={dcScheduleStyle.schedule}>
            <DaySchedule day='Mon' active='True'/>
            <DaySchedule day='Tue'/>
            <DaySchedule day='Wed'/>
            <DaySchedule day='Thu'/>
            <DaySchedule day='Fri'/>
            <DaySchedule day='Sat'/>
            <DaySchedule day='Sun'/>
        </div>
    )
}

export default WorkSchedule;