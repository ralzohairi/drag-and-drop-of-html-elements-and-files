// Variables
var orangeSquare = document.getElementById("drop-element");
var pinkSquareContainer = document.getElementsByClassName("draggable-container")[0];

//Feature detection from Modernizr
var div = document.createElement("div");

if ("draggable" in div || ("ondragstart" in div && "ondrop" in div))
    console.log("Drag and Drop API is supported!");

// Draggable Element Functions
function onDragStartForPinkSquare(event) {
    event.dataTransfer.setData("text/plain", event.target.id); // "draggable-element"
    // define allowed effects
    event.dataTransfer.effectsAllowed = "move";

    // change cursor style
    event.target.style.cursor = "move";

    // To possibly create a drag image then hide the original
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function onDragEndForPinkSquare(event) {
    event.target.style.cursor = "pointer";
    event.target.classList.remove('hide');
}

// Generic onDragOver and onDrop Functions
function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function onDrop(event, color) {
    event.preventDefault();

    // Extract id of element and get it's reference
    var id = event.dataTransfer.getData("text/plain");
    var pinkSquaere = document.getElementById(id);

    // Only append element, if it's not already appended to that elem
    // i.e. if that element is not it's parent

    if (color === "pink") {
        if (!pinkSquaere.parentNode.isSameNode(pinkSquareContainer))
            event.target.appendChild(pinkSquaere);
    } else {
        if (!pinkSquaere.parentNode.isSameNode(orangeSquare))
            event.target.appendChild(pinkSquaere);
    }
}

// Functions for drop zone 1 (Orange Square)

function onDragOverForOrangeSquare(event) {
    onDragOver(event);
}

function onDropForOrangeSquare(event) {
    onDrop(event, "orange");
}

// Functions for drop zone 2 (Pink bordered Square)

function onDragOverForPinkSquareContainer(event) {
    onDragOver(event);
}

function onDropForPinkSquareContainer(event) {
    onDrop(event, "pink");
}
