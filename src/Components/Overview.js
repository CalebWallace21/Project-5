import React from "react"
import {useSelector} from "react-redux"
import {selectDisplay} from "../redux/slices/displayCountrySlice"


const Overview = () => {
    let currentDisplay = useSelector(selectDisplay)
    return (
    <div className="stack">
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>

        <table>
            <tr>
                <td>Borders: </td>
                <td>
                    {currentDisplay.borders ? currentDisplay.borders.map((elem, i, arr) => {
                        if(i + 1 === arr.length) {
                            return `${elem}`;
                        } else {
                            return `${elem}, `
                        }
                    }) 
                : "N/A"}
                </td>
            </tr>
            <tr>
                <td>Capitol: </td>
                {currentDisplay.capital.map((elem) => (
                    <td>{elem} </td>
                ))}
            </tr>
            <tr>
                <td>Population: </td>
                <td>{currentDisplay.population}</td>
            </tr>
            <tr>
                <td>Continent: </td>
                {currentDisplay.continents.map((elem) => (
                    <td>{elem}</td>
                ))}
            </tr>


        </table>
    </div>
    )
}

export default Overview