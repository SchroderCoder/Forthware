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

    function checkOne(){
        var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
        var checkedOne = Array.prototype.slice.call(checkboxes2).some(x => x.checked);

        const errorMessage = !checkedOne ? 'At least one checkbox must be selected.' : '';
        console.log(errorMessage);
        alert(errorMessage)

    }