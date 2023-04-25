import homeStyle from './style/home.module.css'
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import {Route} from "react-router-dom";
import DrugsResult from "./DrugsResult";
import ClinicResult from "./ClinicResult";
import PharmaciesResult from "./PharmaciesResult";
import {useSelector} from "react-redux";
import DoctorResult from "./DoctorResult";

function Home(props) {
    const state = useSelector((state) => state.homeReducer)
    let doctorResults = state.doctors.map((d) => {
        return <DoctorResult dc={d}/>
    })
    let drugResults = state.drugs.map((d) => {
        return <DrugsResult drug={d}/>
    })
    let clinicResults = state.clinics.map((c) => {
        return <ClinicResult clinic={c}/>
    })
    let pharmaciesResults = state.pharmacies.map((p) => {
        return <PharmaciesResult pharmacy={p}/>
    })
    return (
        <div className={homeStyle.home}>

            <div></div>
            <div className={homeStyle.container}>
                <div className={homeStyle.searchSection}>
                    <SearchBox/>
                </div>
                {/*<div className={homeStyle.filterBtn}>*/}
                {/*    Use Filter*/}
                {/*</div>*/}
                <div className={homeStyle.NavBar}>
                    <NavBar/>
                </div>
                <div className={homeStyle.resultSection}>
                    <Route exact path={['/h', '/h/doctors']}>
                        {doctorResults}
                    </Route>
                    <Route path='/h/drugs'>
                        {drugResults}
                    </Route>
                    <Route path='/h/clinics'>
                        {clinicResults}
                    </Route>
                    <Route path='/h/pharmacies'>
                        {pharmaciesResults}
                    </Route>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Home;