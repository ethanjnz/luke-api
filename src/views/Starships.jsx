

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from "axios";



const Starships = () => {

    const { id } = useParams();
    const [ship, setShip] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then((response) => {
                console.log(response)
                setShip(response.data);
            })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    if (!ship) {
        return <p>fail</p>
    }


    return (

        <div className="card w-25 mx-auto m-3">
            <h2 className="card-header">{ship.name}</h2>
            <div className="card-body">
                <p>Crew: {ship.crew}</p>
                <p>Cost In Credits: {ship.cost_in_credits}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Model: {ship.model} years</p>

            </div>

        </div>
    )
}

export default Starships