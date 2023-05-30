import Select from 'react-select'
import createStyle from "./style/create.module.css";
import {useEffect} from "react";

function PatientSearchInput(props) {
    useEffect(() => {
        props.getPatientBySearch()
    }, [])
    const options = props.patients.patients.map((patient) => {
        return {value: patient.id, label: patient.fullName}
    })
    return (
        <Select options={options} placeholder='Patient Fullname' className={createStyle.sampleInput}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#7ec4ff',
                        primary: '#1b81ce',
                    },
                })}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'black' : '#ddddd',
                    })
                }}
                onChange={(value) => {
                    props.setRecord({...props.record, patient_id: value.value, patient_FullName: value.label})
                }}
        />
    )
}

export default PatientSearchInput;