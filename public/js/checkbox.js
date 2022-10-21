var show = false;

function showCheckboxes() {
    const  checkboxes =  document.getElementById("checkBoxes");
    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

var show2 = false;

function showCheckboxes2() {
    const  checkboxes =  document.getElementById("checkBoxes2");
    if (show2) {
        checkboxes.style.display = "block";
        show2 = false;
    } else {
        checkboxes.style.display = "none";
        show2 = true;
    }
}