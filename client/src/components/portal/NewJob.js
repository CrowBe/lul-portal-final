import React, { useState } from "react";
import { useAuth0 } from "../../config/react-auth0-spa";

const NewJob = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ surname, setSurname ] = useState("");
    const { getTokenSilently } = useAuth0();

    const createJob = async (e) => {
        e.preventDefault();
        const token = await getTokenSilently();
        const response = await fetch('/api/job', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, surname }),
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer',
        });
        response.json().then(value => console.log(value.success));
        // Redirect to job page with id#
    }

    return (
        <div>
            <form id="new-job" onSubmit={createJob}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder="Customer's First Name*" onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" id="surname" placeholder="Customer's Surname*" onChange={(e) => setSurname(e.target.value)} value={surname} required />
                <button value="Submit" type="submit" form="new-job">Create Job</button>
            </form>
        </div>
    )
}

export default NewJob;