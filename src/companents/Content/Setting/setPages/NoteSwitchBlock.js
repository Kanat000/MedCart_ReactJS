import setNotificationStyle from "../css/setnotification.module.css";
import Toggle from 'react-styled-toggle';

function NoteSwitchBlock(props) {
    return (
        <div className={setNotificationStyle.itemBlock}>
            <div className={setNotificationStyle.itemName}>
                {props.allow.name}
            </div>
            <div className={setNotificationStyle.itemAction}>
                <Toggle name={props.allow.switch_name} checked={props.allow.switch} height={20} width={46}
                        sliderWidth={11}
                        sliderHeight={11} onChange={() => props.setNoteAllow(props.index)}/>
            </div>
        </div>
    )
}

export default NoteSwitchBlock;