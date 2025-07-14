const pythonButton = document.getElementById("python-selector");
const javaButton = document.getElementById("java-selector");
const robloxButton = document.getElementById("roblox-selector");

const pythonDiv = document.getElementsByClassName("python-card-container")[0];
const javaDiv = document.getElementsByClassName("java-card-container")[0];
const robloxDiv = document.getElementsByClassName("roblox-card-container")[0];

let currentFilter;

function ClearFilter() {
    pythonDiv.classList.add('hidden');
    javaDiv.classList.add('hidden');
    robloxDiv.classList.add('hidden');
};

pythonButton.addEventListener('click', function() {
    if (currentFilter != "Python") {
        currentFilter = "Python";

        ClearFilter();

        pythonDiv.classList.remove('hidden');
    }
});

javaButton.addEventListener('click', function() {
    if (currentFilter != "Java") {
        currentFilter = "Java";

        ClearFilter();

        javaDiv.classList.remove('hidden');
    }
});

robloxButton.addEventListener('click', function() {
    if (currentFilter != "Roblox") {
        currentFilter = "Roblox";

        ClearFilter();

        robloxDiv.classList.remove('hidden');
    }
});