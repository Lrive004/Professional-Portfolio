const mainButton = document.getElementById("work-btn");
const workDivEl = document.getElementById("work-container");

function showWork() {
    // Removes further interactivity with button
    mainButton.classList.add("hide");
    // Creates header for introduction of projects
    const workTag = document.createElement("h3");
    workTag.textContent = "My available projects: ";

    workDivEl.append(workTag);

    // Presents first project
    const firstImg = document.createElement("img");
    firstImg.setAttribute("src", "images/Screenshot 2024-01-22 220041.png");
    firstImg.classList.add("first-img-styling");

    workDivEl.append(firstImg);

}

mainButton.addEventListener("click", showWork);