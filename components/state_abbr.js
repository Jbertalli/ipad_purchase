import React, { useState, useEffect } from "react";
import axios from 'axios';
import reverse from 'reverse-geocode';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `0a6c7a4e56dfa967793cbd7761dde032`;

function StateAbbr() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [responseData, setResponseData] = useState({});
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        //fetch data with axios
        let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
        axios.get(finalAPIEndPoint)
            .then((response) => {
                setResponseData(response.data);
            })
    }, [latitude, longitude])

    let zipCode = reverse.lookup(latitude, longitude, 'us');
    // console.log(zipCode);
    // console.log(zipCode.zipcode);

    return (
        <span>
            {zipCode.state_abbr}
        </span>
    );
}

export default StateAbbr;
