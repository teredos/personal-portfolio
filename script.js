let lightModeButton = document.getElementById("lightbulb-button");

lightModeButton.onclick = function() {
    const body = document.body;
    const lightBulb = document.getElementById("lightbulb");
    const freeCodeCampLogo = document.getElementById("freeCodeCamp-logo");
    const githubLogo = document.getElementById("Github-logo");
    const envelopeLogo = document.getElementById("Envelope-logo");

    body.classList.toggle("light-mode");

    if (lightBulb.src.match("outline_lightbulb")) {
        lightBulb.src = "images/baseline_lightbulb_white_24dp.png";
    } else {
        lightBulb.src = "images/outline_lightbulb_white_24dp.png";
    }

    if (freeCodeCampLogo.src.match("secondary")) {
        freeCodeCampLogo.src = "images/fcc_primary_small.png";
    } else {
        freeCodeCampLogo.src = "images/fcc_secondary_small.png";
    }

    if (githubLogo.src.match("Dark")) {
        githubLogo.src = "images/GitHub-Mark-Light-120px-plus.png";
    } else {
        githubLogo.src = "images/GitHub-Mark-Dark-120px-plus.png";
    }

    if (envelopeLogo.src.match("dark")) {
        envelopeLogo.src = "images/envelope-white.png";
    } else {
        envelopeLogo.src = "images/envelope-dark.png";
    }

}