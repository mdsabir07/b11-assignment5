// reusable functions
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextValue(id) {
    const value = document.getElementById(id).innerText;
    return value;
}

function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}

function cartSum() {
    const cart = getInnerTextByID("cart");
    const cartSum = cart + 1;
    setInnerTextByIDandValue("cart", cartSum);
}

function assignedSum() {
    const taskAssigned = getInnerTextByID("taskAssigned");
    const AssignedSum = taskAssigned - 1;
    setInnerTextByIDandValue("taskAssigned", AssignedSum);
}


// get current time
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // converting hours 24 to 12
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${amPm}`;
}

// Assigned button JS
// Button 1 js
const btnCompleted1 = document.getElementById("btnCompleted1");
btnCompleted1.addEventListener("click", function () {
    if (btnCompleted1) {
        console.log(alert("Board updated successfully"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading1");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})
// Button 2 js
const btnCompleted2 = document.getElementById("btnCompleted2");
btnCompleted2.addEventListener("click", function () {
    if (btnCompleted2) {
        console.log(alert("Board updated successfully"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading2");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})
// Button 3 js
const btnCompleted3 = document.getElementById("btnCompleted3");
btnCompleted3.addEventListener("click", function () {
    if (btnCompleted3) {
        console.log(alert("Board updated successfully"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading3");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})
// Button 4 js
const btnCompleted4 = document.getElementById("btnCompleted4");
btnCompleted4.addEventListener("click", function () {
    if (btnCompleted4) {
        console.log(alert("Board updated successfully"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading4");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})
// Button 5 js
const btnCompleted5 = document.getElementById("btnCompleted5");
btnCompleted5.addEventListener("click", function () {
    if (btnCompleted5) {
        console.log(alert("Board updated successfully"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading5");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})
// Button 6 js
const btnCompleted6 = document.getElementById("btnCompleted6");
btnCompleted6.addEventListener("click", function () {
    if (btnCompleted6) {
        console.log(alert("Board updated successfully"));
        console.log(alert("Congrates!!! You have completed all the current task 🤲"));
        this.classList.add("disabled", "pointer-events-none", "opacity-25", "bg-gray-600");
    }
    cartSum();
    assignedSum();

    const getHeading = getInnerTextValue("boxHeading6");

    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("bg-(--colo-bg)", "rounded-lg", "px-5", "py-[10px]", "text-left", "mt-3");
    div.innerHTML = `You have Complete The Task <b>${getHeading}</b> at <b>${getCurrentTime()}</b>`;
    historyContainer.appendChild(div);
})

// Clear history JS
const historyContainer = document.getElementById("history-container");
const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", function () {
    historyContainer.innerHTML = '';
})

// Changing background color randomly
function changeBgColorRandomly() {
    const codes = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += codes[Math.floor(Math.random() * 16)];
    }
    return color;
}
const changeBgColor = document.getElementById("changeBgColor");
changeBgColor.addEventListener("click", function () {
    document.body.style.background = changeBgColorRandomly();
})
changeBgColor.addEventListener("mouseover", function () {
    changeBgColor.style.transition = "none";
    changeBgColor.style.transform = "rotate(0deg)";

    void changeBgColor.offsetWidth;

    changeBgColor.style.transition = "transform 3s";
    changeBgColor.style.transform = "rotate(360deg)";
})


// Today's date
const today = new Date();
const daysOfWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const week = daysOfWeeks[today.getDay()];
const day = today.getDate();
const monthOfYears = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthOfYears[today.getMonth()];
const year = today.getFullYear();

const fullDate = `${week}, ${month} ${day} ${year}`;
document.getElementById("dateToday").innerText = fullDate;

