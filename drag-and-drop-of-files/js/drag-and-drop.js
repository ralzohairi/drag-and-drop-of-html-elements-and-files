// Variables
var orangeSquare = document.getElementById("drop-element");
var pinkSquareContainer = document.getElementsByClassName(
    "draggable-container"
)[0];

//Feature detection from Modernizr
var div = document.createElement("div");

if ("draggable" in div || ("ondragstart" in div && "ondrop" in div))
    console.log("Drag and Drop API is supported!");

// Generic onDragOver and onDrop Functions
function onDragOver(event) {
    console.log("File in drop zone");
    event.preventDefault();
}

function onDrop(event, color) {
    event.preventDefault();

    console.log("File dropped");

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();

    //Use DataTransfer interface to access the file
    var filenameElem = document.getElementById("file-name");
    filenameElem.innerHTML = "File name: " + event.dataTransfer.files[0].name
        + "<br/> File size: " + event.dataTransfer.files[0].size;
    filenameElem.style.display = "block";
    document.getElementsByClassName("file-dragging-title")[0].style.display = "none";
}
