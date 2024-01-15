function calculateDate() {
    var inputDate = document.getElementById("dateInput").value;

    if (inputDate === "") {
        alert("Please enter a valid date.");
        return;
    }

    var dateParts = inputDate.split("/");
    var year = parseInt(dateParts[2]);

    var newYear = year + 8;
    var newDate = new Date(newYear, 0, 1);
    
    var daysToAdd = (parseInt(dateParts[0]) * 30) - 120 + parseInt(dateParts[1]) - ((year % 4 === 1) ? 23 : 22);

    newDate.setDate(newDate.getDate() + daysToAdd);

    var result = "New Date: " + (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
    document.getElementById("result").innerHTML = result;
}
