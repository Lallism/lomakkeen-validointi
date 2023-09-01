const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    let userId = document.forms["form"]["user-id"].value;
    let password = document.forms["form"]["password"].value;
    let name = document.forms["form"]["name"].value;
    let address = document.forms["form"]["address"].value;
    let country = document.forms["form"]["country"].value;
    let postcode = document.forms["form"]["postcode"].value;
    let email = document.forms["form"]["email"].value;
    let gender = document.forms["form"]["gender"].value;
    let languages = document.forms["form"]["language"];

    if (userId.length < 6) {
        alert("Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä");
        return
    }

    if (password == "") {
        alert("Anna kelvollinen salasana");
        return
    }

    if (name == "") {
        alert("Anna kelvollinen nimi");
        return
    }

    if (address == "") {
        alert("Anna kelvollinen osoite");
        return
    }

    if (country == "none") {
        alert("Valitse maa");
        return
    }

    if (isNaN(postcode) || postcode.length < 5 || postcode.length > 5) {
        alert("Postinumerossa pitää olla 5 numeroa")
        return
    }

    let pattern = /^\S+@\S+\.\S+$/;

    if (pattern.test(email) == false) {
        alert("Anna kelvollinen sähköpostiosoite")
        return
    }

    if (gender == "") {
        alert("Valitse sukupuoli");
        return
    }

    let languagesChecked = 0;

    for (let i = 0; i < languages.length; i++) {
        if (languages[i].checked) {
            languagesChecked++;
        }
    }

    if (languagesChecked == 0) {
        alert("Valitse kieli");
        return
    }

    alert("Lomake täytetty onnistuneesti");
}