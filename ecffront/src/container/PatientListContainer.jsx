import React, { useState, useEffect } from "react";
import PatientInfo from "../component/Table.jsx";

function PatientListContainer() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch("https://api-ecf.sarahkatz.fr/patients")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Problème lors de la récupération des données patients"
                    );
                }
                return response.json();
            })
            .then((data) => {
                setPatients(data);
            })
            .catch((error) => {
                console.error("Erreur lors du fetch", error);
            });
    }, []);

    return (
        <div>
            <table className="customers">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>N°</th>
                </tr>
                </thead>
                <tbody>
                {patients.map((patient) => (
                    <tr key={patient.idPatient}>
                        <PatientInfo
                            nom={patient.lastName}
                            prenom={patient.firstName}
                            numero={patient.socialSecurityNumber}
                        />
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatientListContainer;
