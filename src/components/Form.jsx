import { useState } from "react"
import { useNavigate } from "react-router"

const Form = () => {


    const [elementInfo, setElementInfo] = useState({ option: "people", id: "" });

    const navigate = useNavigate();


    const changeHandler = (e) => {
        setElementInfo({ ...elementInfo, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${elementInfo.option}/${elementInfo.id}`);
    }

    return (

        <form onSubmit={submitHandler} className="d-flex card w-50 mx-auto m-5">
            <div className="d-flex m-3">
                <label className="form-label m-2" htmlFor="items">Search for:</label>
                <select value={elementInfo.option} onChange={changeHandler} className="form-select" name="option" id="items">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className="d-flex mx-auto m-3">
                <label className="form-label m-2" htmlFor="id">ID:</label>
                <input className="rounded border" onChange={changeHandler} value={elementInfo.id} min={1} type="number" name="id" id="id" />
            </div>
            <div>
                <button className="btn btn-primary m-3" type="submit">Search</button>
            </div>
        </form>
    )
}

export default Form