function validateForm() {
    let form = document.querySelector('form').value;
    if (form == null) {
        alert("mohon isi data secara lengkap!");
        console.log(form);
        return false;
    }
    else {
        alert("Pendaftaran Sukses!");
        console.log(form);
        return true;
    }
}