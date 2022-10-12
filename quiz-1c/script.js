function validateForm() {
    let errCheck = 0;
    let inputForm = document.querySelectorAll("input");
    for (let i = 0; i < inputForm.length; i++) {
        if (!inputForm[i].value) {
            errCheck += 1;
        }
        continue;
    }

    if (errCheck !== 0) {
        return alert("Mohon isi semua data!");
    }
    else {
        return alert("Pendaftaran sukses!");
    }
}