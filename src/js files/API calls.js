import {weatherPage} from "./DOM selectors";

async function StartAsync(city) {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=8631408bbd50406cba0131620232505&q=${city}&aqi=no`;
        const response = await fetch(url, {mode: "cors"});
        var response_json = await response.json();

        if (weatherPage.main_error_container.classList.contains("hide")) {

        } else {
            weatherPage.main_error_container.classList.add("hide");
        }
        // getcoord(response_json)
    } catch (err) {

    }
    return await response_json
}

async function logoresponse(coords) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&exclude=minutely,alerts&units=c&appid=20f7632ffc2c022654e4093c6947b4f4`;
    const response = await fetch(url, {mode: "cors"});
    const response_json = await response.json();
    return (response_json.current.weather[0].icon);

}

function getcoord(json) {
    let coords = [];
    const latitude = json.location.lat;
    const longitude = json.location.lon;
    coords.push(latitude, longitude);
    return coords;
}

async function previousdata(city, date) {
    let url = `https://api.weatherapi.com/v1/history.json?key=8631408bbd50406cba0131620232505&q=${city}&dt=${date}`;
    const resp = await fetch(url, {mode: "cors"});
    const resp_json = await resp.json();
    const climate = await resp_json.forecast.forecastday[0].day.avgtemp_c;
    return climate
}


export {StartAsync, logoresponse, getcoord, previousdata}
