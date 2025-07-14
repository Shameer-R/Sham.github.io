// Get references to filter buttons
const pythonButton = document.getElementById("python-selector");
const javaButton = document.getElementById("java-selector");
const robloxButton = document.getElementById("roblox-selector");

// Get references to card containers
const pythonDiv = document.getElementsByClassName("python-card-container")[0];
const javaDiv = document.getElementsByClassName("java-card-container")[0];
const robloxDiv = document.getElementsByClassName("roblox-card-container")[0];

let currentFilter = null;

function ClearFilter() {
    pythonDiv.classList.add('hidden');
    javaDiv.classList.add('hidden');
    robloxDiv.classList.add('hidden');
}

function ApplyFilter(filterName) {
    ClearFilter();
    currentFilter = filterName;

    switch (filterName) {
        case "Python":
            pythonDiv.classList.remove('hidden');
            break;
        case "Java":
            javaDiv.classList.remove('hidden');
            break;
        case "Roblox":
            robloxDiv.classList.remove('hidden');
            break;
        default:
            pythonDiv.classList.remove('hidden');
            javaDiv.classList.remove('hidden');
            robloxDiv.classList.remove('hidden');
    }
}

function GetFilterFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("filter");
}

pythonButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.pushState({}, "", "?filter=Python");
    ApplyFilter("Python");
});

javaButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.pushState({}, "", "?filter=Java");
    ApplyFilter("Java");
});

robloxButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.history.pushState({}, "", "?filter=Roblox");
    ApplyFilter("Roblox");
});

window.addEventListener('DOMContentLoaded', function () {
    const filter = GetFilterFromURL();
    ApplyFilter(filter);
});
