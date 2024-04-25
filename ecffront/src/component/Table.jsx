import React from 'react';

function PatientInfo(props) {
    return (

            <React.Fragment>
                <td>{props.nom}</td>
                <td>{props.prenom}</td>
                <td>{props.numero}</td>
            </React.Fragment>

    );
}

export default PatientInfo;
