function myLineUp(event) {
    const formData = new FormData(event.target);
    let status = "";
    let gameDate = "";
    let players = [];

    for (const [name, value] of formData) {
        if (name === "status") {
            status = value;
        } else if (name === "gameDate") {
            gameDate = value;
        } else if (value === "on") {
            const label = document.querySelector(`label[for="${name}"]`).innerHTML;
            players.push(label);
        }
    }
    
    const displayString = `The lineup status is: ${status}<br>
    The date selected is: ${gameDate}<br>
    The player(s) are: ${players.join(", ")}`;
    
    console.log(displayString);

    let formDisplay = document.getElementById("form-display");
    if (!formDisplay) {
        formDisplay = document.createElement("p");
        formDisplay.id = "form-display";
        document.body.appendChild(formDisplay);
    }
    formDisplay.innerHTML = displayString;
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-lineup");
    if (!form) {
        console.error("Form with ID 'form-lineup' not found.");
        return;
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        myLineUp(event);
    });
});