import dcProfileStyle from "../style/doctorProfile.module.css";
import WorkSchedule from "./WorkSchedule";
import calendarStyle from "../../Calendar/style/calendar.module.css";

function DcSchedule() {
    return (
        <div className={dcProfileStyle.frame}>
            <div className={dcProfileStyle.title}>Schedule</div>
            <div className={dcProfileStyle.dcSchedule}>
                <WorkSchedule/>
            </div>
            <div className={calendarStyle.weekChangeBtns}>
                <div>
                    <button className={calendarStyle.changeBtn}>Back</button>
                    <button className={calendarStyle.changeBtn}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default DcSchedule