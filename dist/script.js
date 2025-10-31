function myLineUp(event) {
    const formData = new FormData(event.target);

    let status = formData.get("status");
    let gameDate = formData.get("gameDate");
    let players = formData.getAll("players");

    //I included breaks so that the string displays nicely on the page for readability.
    const displayString = `Lineup status: ${status}<br>
    Date: ${gameDate}<br>
    Player(s): ${players.join(", ")}`;

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