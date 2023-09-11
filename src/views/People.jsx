import { useParams } from "react-router"

const Color = () => {

    const { whatIs, font, background } = useParams();

    return (

        <div>
            <h1 style={{ backgroundColor: background, color: font }}>{isNaN(whatIs) ? "The word is: " : "The number is:"} {whatIs}</h1>
        </div>
    )
}

export default Color