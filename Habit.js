let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let currentMonth = 5; // June (0 = January)

let month = document.getElementById("month");

function showMonth() {
    month.innerText = months[currentMonth];
}

document.getElementById("next").onclick = function () {
    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
    }

    showMonth();
};

document.getElementById("prev").onclick = function () {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
    }

    showMonth();
};

showMonth();