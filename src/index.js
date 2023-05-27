import "./css files/main.css"
import {startcontrol} from "./js files/startPage";
import {weatherPage} from "./js files/DOM selectors";
import {Getcity} from "./js files/Page renders";

const search = document.getElementById("start_search_container");
search.addEventListener("click", startcontrol.unhide);

weatherPage.main_search_start.addEventListener("click", () => {
    Getcity(weatherPage.main_input.value)
})
