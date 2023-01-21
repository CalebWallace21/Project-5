import axios from "axios";
import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import {selectDisplay} from "../redux/slices/displayCountrySlice"
import {toggleLoading, setLoadingFalse, setLoadingTrue} from "../redux/slices/loadingSlice"


const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay)
    let latitude = display.capitalInfo.latlng[0]
    let longitude = display.capitalInfo.latlng[1]

    useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${latitude}, ${longitude}`},
        headers: {
            'X-RapidAPI-Key': '46b56441camsh26af4081c941398p14f207jsnbb966bfe9a90',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

axios.request(options)
.then(function (response) {
    setWeather(response.data)
	console.log("weather data", response.data);
}).catch(function (error) {
	console.error(error);
});
    }, [])

    // let loading = useSelector(selectLoading)

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current.feelslike_f}</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current.humidity}</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>{weather?.current.wind_mph} mph</td>
                </tr>
                <tr>
                    <td>Wind Direction: </td>
                    <td>{weather?.current.wind_dir}</td>
                </tr>
                <tr>
                    <td>Local Time: </td>
                    <td>{weather?.location.localtime}</td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
