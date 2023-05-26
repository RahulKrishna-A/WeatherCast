const startcontrol = (()=>{

    const unhide =()=>{
        const search_input=document.getElementById("start_form_input");
        const search_submit = document.getElementById("start_form_submit");
        search_submit.addEventListener("click",redirect);
        search_input.classList.remove("hide");
        search_submit.classList.remove("hide");
    }

    const redirect = (e) =>{
        const search_input=document.getElementById("start_form_input");
        e.preventDefault();
        const location_value = search_input.value;
        document.location.replace("../weather.html");
        //function call

    }

    return{
        unhide,

    }
})()

export {
    startcontrol
}