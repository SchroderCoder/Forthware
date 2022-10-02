function confirm() {
    console.log("www")
    const form = document.querySelector('#crear');
    console.log(form);
    const checkboxes = getElementById("checkBoxes")
    const checkboxLength = checkboxes.length;
    console.log(checkboxes.length);
    console.log(checkboxes);
    console.log("Jijiaj");
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
}