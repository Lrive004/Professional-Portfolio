const mainButton = document.getElementById("work-btn");
const workDivEl = document.getElementById("work-container");

function showWork() {
    // Removes further interactivity with button
    mainButton.classList.add("hide");

    // Creates header for introduction of projects
    const workTag = document.createElement("h3");
    workTag.textContent = "My available projects: ";
    workDivEl.append(workTag);

    // Populates title of project
    const projectTitle1 = document.createElement("h4");
    projectTitle1.textContent = "Password Generator";
    workDivEl.append(projectTitle1);

    divEl1 = document.createElement("div");

    // Presents first project
    const anchor1 = document.createElement("a");
    anchor1.href="https://lrive004.github.io/password-generator/";

    const firstImg = document.createElement("img");
    firstImg.setAttribute("src", "images/Screenshot 2024-01-22 220041.png");
    firstImg.classList.add("first-img-styling");
    
    
    anchor1.appendChild(firstImg);
    divEl1.appendChild(anchor1);
    workDivEl.append(divEl1);
    
    

    // // Presents second project

    // // Populates title of project
    let projectTitle2 = document.createElement("h4");
    projectTitle2.textContent = "JavaScript Quiz";
    workDivEl.appendChild(projectTitle2);

   const divEl2 = document.createElement("div");

    // // Presents second project
    const anchor2 = document.createElement("a");
    anchor2.href="https://lrive004.github.io/javascript-quiz/";

    const secondImg = document.createElement("img");
    secondImg.setAttribute("src", "images/300281980-8b1cb837-e94c-4af6-9976-ea3cb62dbefd.png");
    secondImg.classList.add("second-img-styling");

    anchor2.appendChild(secondImg);
    divEl2.appendChild(anchor2);
    workDivEl.append(divEl2);
    
}

mainButton.addEventListener("click", showWork);