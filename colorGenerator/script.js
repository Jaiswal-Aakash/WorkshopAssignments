let containers = document.querySelectorAll(".container")
function myScript() {
    containers.forEach(cont => {
        cont.style.backgroundColor = "green";
    });
}