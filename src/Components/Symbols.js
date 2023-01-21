import React from "react"
import {useSelector} from "react-redux"
import {selectDisplay} from "../redux/slices/displayCountrySlice"

const Symbols = () => {
    let currentDisplay = useSelector(selectDisplay)
    console.log("currentDisplay", currentDisplay)
    return (
    <div className="symbols">
        <div className="stack">
            <h2>Flag of {currentDisplay.name.common}</h2>
            <img src= {currentDisplay.flags.png} />
        </div>
        <div className="stack">
            <h2>Coat of Arms of {currentDisplay.name.common}</h2>
            <img src = {currentDisplay.coatOfArms.png} />
        </div>

    </div>
    )
}

export default Symbols