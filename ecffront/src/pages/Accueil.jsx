import React from "react";
import MyButton from "../component/Button.jsx";
import SearchBar from "../component/Search.jsx";
import PatientInfo from "../component/Table.jsx";
import PatientListContainer from "../container/PatientListContainer.jsx";
import Button from "../component/Button.jsx";

function Accueil(){
    return (
        <>
        <div className={"Test"}>
            <SearchBar filterText={"Search"} />
            <MyButton className={"navBar"} title="Patient"/>
            <MyButton className={"navBar"} title="Service"/>

        </div>
            <div className={"List"}>
                <PatientInfo filterText={"filterText"}/>
                <PatientListContainer/>
            </div>
            <br/>
            <div>
                <Button className={"addPatient"} title={"+ Ajouter Patient"}/>
            </div>
    </>
    );
} export default Accueil;
