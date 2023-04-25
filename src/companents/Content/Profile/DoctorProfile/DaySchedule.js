import dcScheduleStyle from "../style/dcSchedule.module.css";


function DaySchedule(props) {
    return (
        <div className={dcScheduleStyle.daySchedule}>
            <div
                className={[dcScheduleStyle.day, props.active === 'True' ? dcScheduleStyle.today : ' '].join(' ')}>{props.day}</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.notFree].join(' ')}>8:00</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.Free].join(' ')}>8:00</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.notFree].join(' ')}>8:00</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.Free].join(' ')}>8:00</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.notFree].join(' ')}>8:00</div>
            <div className={[dcScheduleStyle.time, dcScheduleStyle.notFree].join(' ')}>8:00</div>

        </div>
    )
}

export default DaySchedule;