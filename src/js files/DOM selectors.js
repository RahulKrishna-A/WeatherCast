const weatherPage = (() => {
    //pages
    const intro_page = document.getElementById("start_container");
    const weather_page = document.getElementById("main_container")

    const climate_status = document.getElementById("content_climate_status");
    const content_temp = document.getElementById("content_temp");
    const content_city = document.getElementById("content_city");
    const content_date = document.getElementById("content_date");
    const content_svg = document.getElementById("content_img");

// input container
    const main_input = document.getElementById("main_input");
    const main_search_start = document.getElementById("main_search-svg-container");
    const main_error_container = document.getElementById("main_error-container");
// Right container
    const feels_like = document.getElementById("feels_like-editable");
    const humidity = document.getElementById("humidity-editable");
    const windSpeed = document.getElementById("wind-editable");
    // footer
    const day_one = document.querySelector(".foot_days-data.one");

    const day_two = document.querySelector(".foot_days-data.two");

    const day_three = document.querySelector(".foot_days-data.three");

    const day_four = document.querySelector(".foot_days-data.four");

    const day_five = document.querySelector(".foot_days-data.five");


    return {
        intro_page,
        weather_page,
        climate_status,
        content_temp,
        content_city,
        content_date,
        content_svg,
        main_input,
        main_search_start,
        main_error_container,
        feels_like,
        humidity,
        windSpeed,
        day_one,
        day_two,
        day_three,
        day_four,
        day_five

    }

})()

export {weatherPage}