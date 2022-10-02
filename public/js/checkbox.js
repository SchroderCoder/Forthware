var show = true;
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
