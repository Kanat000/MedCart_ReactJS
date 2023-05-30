import homeStyle from './style/home.module.css'
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import DoctorResult from "./DoctorResult";
import DrugsResult from "./DrugsResult";
import ClinicResult from "./ClinicResult";
import PharmaciesResult from "./PharmaciesResult";
import LoadingPage from "../Main/LoadingPage";
import PatientResult from "./PatientResult";

function getResults(data) {
    return (
        <div>
            <Route exact path={'/h/doctors'}>
                {data.doctors.map((doctor) => {
                    return <DoctorResult dc={doctor}/>
                })}
            </Route>
            <Route exact path={'/h/d/patients'}>
                {data.patients.map((patient) => {
                    return <PatientResult patient={patient}/>
                })}
            </Route>
            <Route path='/h/drugs'>
                {data.medicament.map((drug) => {
                    return <DrugsResult drug={drug}/>
                })}
            </Route>
            <Route path='/h/clinics'>
                {data.clinics.map((clinic) => {
                    return <ClinicResult clinic={clinic}/>
                })}
            </Route>
            <Route path='/h/pharmacies'>
                {data.pharmacies.map((pharmacy) => {
                    return <PharmaciesResult pharmacy={pharmacy}/>
                })}
            </Route>
        </div>
    )
}


function Home(props) {
    let [search, setSearch] = useState()
    useEffect(() => {
        props.getPatientHomeData(search)

    }, [search])

    let data = props.home.data;
    let loading = props.home.loading;
    return (
        <div className={homeStyle.home}>

            <div></div>
            <div className={homeStyle.container}>
                <div className={homeStyle.searchSection}>
                    <SearchBox setSearch={setSearch} search={search}/>
                </div>
                {/*<div className={homeStyle.filterBtn}>*/}
                {/*    Use Filter*/}
                {/*</div>*/}
                <div className={homeStyle.NavBar}>
                    <NavBar/>
                </div>
                <div className={homeStyle.resultSection}>
                    {loading ? <div className={homeStyle.loadingBlock}><LoadingPage/></div> : getResults(data)}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Home;