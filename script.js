function fastLog(text){
    console.log(text);
    return "text logged muhaha";
}

function buttonClicked(event){
// console.log(event.target);

 // console.log(event.target.classList);

    event.target.classList.toggle("clicked");

    const fastLogResult = fastLog("Ezt a szöveget szeretném kiloggoltatni");
    console.log(fastLogResult);
}

function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", buttonClicked);
}

window.addEventListener("load", loadEvent);