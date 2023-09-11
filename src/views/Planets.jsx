import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from "axios";



const Planets = () => {

    const { id } = useParams();
    const [world, setWorld] = useState(null)
    const baseUrl = 'https://swapi.dev/api'
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                console.log(response)
                setWorld(response.data);
            })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    if (!world) {
        return <p>Loading...</p>
    }


    return (

        <div className="card w-25 mx-auto m-3">
            <h2 className="card-header">{world.name}</h2>
            <div className="card-body">
                <p>Climate: {world.climate}</p>
                <p>Gravity: {world.gravity}</p>
                <p>Population: {world.population}</p>
                <p>Terrain: {world.terrain}</p>
            </div>

        </div>
    )
}

export default Planets