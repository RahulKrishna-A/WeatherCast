import {StartAsync,logoresponse,getcoord,previousdata} from "./API calls";
import {weatherPage} from "./DOM selectors";

async function Getcity(city){
    try {
        let current_city = city;
        console.log(city)
        let coord = await StartAsync(city);
        if(coord.error){
            if(weatherPage.main_error_container.classList.contains("hide")){
                weatherPage.main_error_container.classList.remove("hide")
            }
        }
        else{

        }
    }
    catch (err){
        console.log(err)
    }
}





export {Getcity}