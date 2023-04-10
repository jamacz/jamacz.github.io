window.onload = function () {
    let headerTemplate = document.getElementById("templates").getElementsByClassName("header")[0];
    for (const e of document.getElementsByClassName("slide-header")) {
        e.appendChild(headerTemplate.cloneNode(true));
    }
}