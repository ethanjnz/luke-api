import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = (props) => {

    const baseUrl = "http https://swapi.dev/api"

    const [elementInfo, setElementInfo] = useState({option: "", id: ""})
    const navigate = useNavigate


    const changeHandler = (e) => {
        setElementInfo({...elementInfo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${baseUrl}${elementInfo.option}${elementInfo.id}/`)
    }

    return (

        <form onSubmit={submitHandler} className="d-flex">
            <div className="d-flex">
                <label className="form-label" htmlFor="items">Search for:</label>
                <select value={elementInfo.option} onChange={changeHandler} className="form-select" name="items" id="items">
                    <option value="planets">Planets</option>
                    <option value="people">People</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className="d-flex">
                <label htmlFor="id">ID:</label>
                <input onChange={changeHandler} value={elementInfo.id} min={0} type="number" name="id" id="id" />
            </div>
            <div>
                <input className="btn btn-primary" type="submit" />
            </div>
        </form>
    )
}

export default Form