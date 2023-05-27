import {StartAsync} from "./API calls";
import {weatherPage} from "./DOM selectors";
import {Getcity} from "./Page renders";

const startcontrol = (() => {

    const unhide = () => {
        const search_input = document.getElementById("start_form_input");
        const search_submit = document.getElementById("start_form_submit");
        search_submit.addEventListener("click", redirect);
        search_input.classList.remove("hide");
        search_submit.classList.remove("hide");

    }

    const redirect = (e) => {
        const search_input = document.getElementById("start_form_input");
        e.preventDefault();
        const location_value = search_input.value;
        Getcity(location_value);

        weatherPage.intro_page.classList.add("hide");
        weatherPage.weather_page.classList.remove("hide");
    }

    return {
        unhide,

    }
})()

export {
    startcontrol
}