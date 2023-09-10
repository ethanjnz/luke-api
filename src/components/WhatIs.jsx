import { useParams } from 'react-router'

const WhatIs = (props) => {

    const { whatIs } = useParams();


    return (
        <div>
            <h1>{isNaN(whatIs) ? "The word is: " : "The number is:"} {whatIs}</h1>
        </div>
    )

}

export default WhatIs