var draggedItems = [];
var dropMessage = document.getElementById("dropMessage");
var successMessage = document.getElementById("successMessage");

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    var draggedItem = event.target;
    draggedItems.push(draggedItem.innerHTML);
    draggedItem.classList.add("dragging");
}

function drop(event) {
    event.preventDefault();
    var droppedItems = draggedItems;
    var container2 = event.target;

    if (container2.classList.contains("container-2")) {
        container2.innerHTML = "";
        droppedItems.forEach(function (item) {
            var newItem = document.createElement("div");
            newItem.className = "item";
            newItem.textContent = item;
            container2.appendChild(newItem);
        });
        displaySuccessMessage();
        dropMessage.classList.add("hidden");
        draggedItems = [];
    }

    var container1 = document.querySelector(".container-1");
    container1.innerHTML = `
    <div class="item" draggable="true" ondragstart="drag(event)">Item 1</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 2</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 3</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 4</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 5</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 6</div>
    `;
}

function reset() {
    var container1 = document.querySelector(".container-1");
    var container2 = document.querySelector(".container-2");
    container1.innerHTML = `
    <div class="item" draggable="true" ondragstart="drag(event)">Item 1</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 2</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 3</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 4</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 5</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Item 6</div>
    `;
    container2.innerHTML = `
    <div class="drop-message" id="dropMessage">Drop here</div>
    `;
    dropMessage.classList.remove("hidden");
    successMessage.style.display = "none";
    draggedItems = [];
}

function displaySuccessMessage() {
    successMessage.style.display = "block";
    setTimeout(function () {
        successMessage.style.display = "none";
    }, 2000);
}