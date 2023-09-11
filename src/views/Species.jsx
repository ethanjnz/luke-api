import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from "axios";



const Species = () => {

    const { id } = useParams();
    const [race, setRace] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}/`)
            .then((response) => {
                console.log(response)
                setRace(response.data);
            })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    if (!race) {
        return <p>fail</p>
    }


    return (

        <div className="card w-25 mx-auto m-3">
            <h2 className="card-header">{race.name}</h2>
            <div className="card-body">
                <p>Classification: {race.classification}</p>
                <p>Designation: {race.designation}</p>
                <p>Language: {race.language}</p>
                <p>Average Lifespan: {race.average_lifespan} years</p>
            </div>

        </div>
    )
}

export default Species