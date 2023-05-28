import {StartAsync, logoresponse, getcoord, previousdata} from "./API calls";
import {weatherPage} from "./DOM selectors";
import {getIcon} from "./logo renders";
import {format, subDays} from "date-fns";

async function Getcity(city) {
    try {
        let current_city = city;

        let jsons = await StartAsync(city);
        if (jsons.error) {
            if (weatherPage.main_error_container.classList.contains("hide")) {
                weatherPage.main_error_container.classList.remove("hide")
            }
        } else {
            Getcoord(jsons)
            leftrightrenders(jsons)

        }
    } catch (err) {

    }
}

function leftrightrenders(jsons) {
    weatherPage.climate_status.innerHTML = `<p>${jsons.current.condition.text}</p>`;
    weatherPage.content_temp.innerHTML = `<p>${jsons.current.temp_c}°</p>`;
    weatherPage.content_city.innerHTML = `<p>${jsons.location.name}</p>`;
    let date = format(new Date(), "EEEE-do MMM");
    weatherPage.content_date.innerHTML = `<p>${date}</p>`

//     right
    weatherPage.feels_like.innerHTML = `<p>${jsons.current.feelslike_c}° C</p>`;
    weatherPage.humidity.innerHTML = `<p>${jsons.current.humidity} %</p>`;
    weatherPage.windSpeed.innerHTML = `<p>${jsons.current.wind_kph} km/h</p>`;
    previous_data_updater(jsons.location.name);
}


async function Getcoord(jsons) {
    let coord = getcoord(jsons);
    let code = await logoresponse(coord);
    await updatesvg(code);

}

function updatesvg(code) {
    weatherPage.content_svg.innerHTML = getIcon(code);
}

function getdate(days) {
    let date = new Date();
    const result = format(subDays(date, 1), "yyyy-LL-d");
    return result
}

async function previous_data_updater(loc) {

    let day_1 = await previousdata(loc, getdate(1));
    weatherPage.day_one.innerHTML = await `<p>${day_1}° C </p>`;

    let day_2 = await previousdata(loc, getdate(2));
    weatherPage.day_two.innerHTML = await `<p>${day_2}° C </p>`;

    let day_3 = await previousdata(loc, getdate(3));
    weatherPage.day_three.innerHTML = await `<p>${day_3}° C </p>`;
    console.log(weatherPage.day_four)
    let day_4 = await previousdata(loc, getdate(4));
    weatherPage.day_four.innerHTML = await `<p>${day_4}° C </p>`;


    let day_5 = await previousdata(loc, getdate(5));
    weatherPage.day_five.innerHTML = await `<p>${day_5}° C </p>`;


}

export {Getcity}