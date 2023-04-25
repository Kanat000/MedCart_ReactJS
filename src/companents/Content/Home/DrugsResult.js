import drugsResultStyle from './style/drugsResultStyle.module.css'

function DrugsResult(props) {
    return (
        <div className={drugsResultStyle.container}>
            <div className={drugsResultStyle.imgBlock}>
                <div className={drugsResultStyle.imgFrame}>
                    <img src={props.drug.img} alt={props.drug.name} className={drugsResultStyle.img}/>
                </div>
            </div>
            <div className={drugsResultStyle.infoBlock}>
                <div className={drugsResultStyle.name}>{props.drug.name}</div>
                <div className={drugsResultStyle.description}>{props.drug.description}
                </div>
            </div>
            <div className={drugsResultStyle.commercial}>
                <div className={drugsResultStyle.cost}>{props.drug.start_price} - {props.drug.end_price} kzt</div>
            </div>
            <div className={drugsResultStyle.view}>
                <button className={drugsResultStyle.viewBtn}>View</button>
            </div>
        </div>
    )
}

export default DrugsResult;