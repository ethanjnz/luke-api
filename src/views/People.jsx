import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from "axios";



const People = () => {

    const { id } = useParams();
    const [person, setPerson] = useState(null)
    const baseUrl = 'https://swapi.dev/api'
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then((response) => {
                console.log(response)
                setPerson(response.data);
            })
            .catch(() => navigate('/error'));
    }, [id, navigate]);

    if (!person) {
        return <p>fail</p>
    }


    return (

        <div className="card w-25 mx-auto m-3">
            <h2 className="card-header">{person.name}</h2>
            <div className="card-body">
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Skin Color: {person.skin_color}</p>
            </div>

        </div>
    )
}

export default People