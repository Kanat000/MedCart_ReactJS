import drugsResultStyle from './style/drugsResultStyle.module.css'
import {useState} from "react";

function DrugsResult(props) {
    let [clickedView, setClickedView] = useState(false)
    return (
        <div className={drugsResultStyle.container} style={clickedView ? {height: '30vh'} : {}}>
            <div className={drugsResultStyle.imgBlock}>
                <div className={drugsResultStyle.imgFrame}>
                    <img src={props.drug.photo} alt={props.drug.name} className={drugsResultStyle.img}/>
                </div>
            </div>
            <div className={drugsResultStyle.infoBlock}>
                <div className={drugsResultStyle.name}>{props.drug.name}</div>
                <div className={drugsResultStyle.description}
                     style={clickedView ? {overflow: 'initial', textOverflow: 'initial'} : {}}>{props.drug.description}
                </div>
            </div>
            <div className={drugsResultStyle.commercial}>
                <div className={drugsResultStyle.cost}>{props.drug.minPrice} - {props.drug.maxPrice} kzt</div>
            </div>
            <div className={drugsResultStyle.view}>
                <button className={drugsResultStyle.viewBtn} onClick={() => {
                    setClickedView(!clickedView)
                }}>{!clickedView ? 'View' : 'Hide'}</button>
            </div>
        </div>
    )
}

export default DrugsResult;