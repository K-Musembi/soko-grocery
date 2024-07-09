let currentDeveloper = 1;
const totalDevelopers = 5;
const developerProfiles = document.querySelectorAll('.developer-profile');
const prototypes = document.querySelectorAll('.prototype');

function showDeveloper(developerNumber) {
    developerProfiles.forEach((profile, index) => {
        profile.style.display = (index + 1 === developerNumber) ? 'block' : 'none';
    });
}

function nextDeveloper() {
    currentDeveloper = (currentDeveloper % totalDevelopers) + 1;
    showDeveloper(currentDeveloper);
}

function prevDeveloper() {
    currentDeveloper = (currentDeveloper - 2 + totalDevelopers) % totalDevelopers + 1;
    showDeveloper(currentDeveloper);
}

document.addEventListener("DOMContentLoaded", function () {
    showDeveloper(currentDeveloper);
});

// Prototype navigation
let currentPrototype = 1;
const totalPrototypes = prototypes.length;

function showPrototype(prototypeNumber) {
    prototypes.forEach((prototype, index) => {
        prototype.style.display = (index + 1 === prototypeNumber) ? 'block' : 'none';
    });
}

function nextPrototype() {
    currentPrototype = (currentPrototype % totalPrototypes) + 1;
    showPrototype(currentPrototype);
}

document.addEventListener("DOMContentLoaded", function () {
    showPrototype(currentPrototype);
});