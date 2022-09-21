let btn_quote = document.getElementById("btn_quote");
let btn_sender = document.getElementById("btn_sender")
const form = document.getElementById("subscribe");
let flag = false;

btn_sender.addEventListener("click", function (event) {
    event.preventDefault();
    if (flag) {
        form.submit();
    } else {
        alert("pleas fill out the form");
    }


});


//fields validation
btn_quote.addEventListener("click", function (e) {
    e.preventDefault();
    let hour = document.getElementById("inputHours").value;
    let rate = document.getElementById("inputRate").value;
    let iva = document.getElementById("checkIva").checked;
    let extras = document.getElementById("inputExtras");
    let service = document.getElementById("inputService");
    let email = document.getElementById("inputEmail").value;
    let name = document.getElementById("inputName").value;
    let city = document.getElementById("inputCity").value;

    let cardText = document.getElementById("cardText");
    if (!ValidateEmail(email)) {
        console.log(document.getElementById("inputEmail").style.borderColor);
        document.getElementById("inputEmail").style.borderColor = "#FF0000";

    } else {
        document.getElementById("inputEmail").style.borderColor = "";

    }

    if (!ValidateName(name)) {
        console.log("por favor ingrese un nombre valido");
        console.log(document.getElementById("inputName").style.borderColor);
        document.getElementById("inputName").style.borderColor = "#FF0000";
        usr_name = "";
        document.getElementById("inputName").value = usr_name;
    } else {

        document.getElementById("inputName").style.borderColor = "";

    }

    if (!ValidateCity(city)) {
        console.log("por favor ingrese un nombre valido");
        console.log(document.getElementById("inputCity").style.borderColor);
        document.getElementById("inputCity").style.borderColor = "#FF0000";

    } else {

        document.getElementById("inputCity").style.borderColor = "";

    }
    if (!ValidateHours(hour)) {
        console.log("horas no texto");
        console.log(document.getElementById("inputHours").style.borderColor);
        document.getElementById("inputHours").style.borderColor = "#FF0000";

    } else {

        document.getElementById("inputHours").style.borderColor = "";

    }
    if (!ValidateRate(rate)) {
        console.log("money no texts");
        console.log(document.getElementById("inputRate").style.borderColor);
        document.getElementById("inputRate").style.borderColor = "#FF0000";


    } else {

        document.getElementById("inputRate").style.borderColor = "";

    }

    if (!document.getElementById("inputService").value) {
        console.log("no services select");
        console.log(document.getElementById("inputService").style.borderColor);
        document.getElementById("inputService").style.borderColor = "#FF0000";

    } else {

        document.getElementById("inputService").style.borderColor = "";

    }

    if ((ValidateEmail(email)) && (ValidateName(name)) && (ValidateCity(city)) && (ValidateHours(hour)) && (ValidateRate(rate)) && (document.getElementById("inputService").value)) {
        console.log(quote(hour, rate, iva, extras, service));

        cardText.innerHTML = `name: ${name},<br/> email: ${email},<br/> we can quote your order <br/>`;
        cardCost.innerHTML = "$" + quote(hour, rate, iva, extras, service).toFixed(2);
        flag = true;
    }


    //here goes tble







});


//validation function 
function ValidateEmail(usr_email) {
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]+)(.[a-z]+)?$/;
    if (usr_email.match(regx)) {
        // alert("Valid email address!");
        console.log("valid email ")

        return true;
    } else {
        console.log("invalid email ")
        // alert("Invalid email address!");
        return false;

    }

}

function ValidateName(name) {
    let regx = /^([a-zA-Z ]+)([a-zA-Z ])?$/;
    if ((name.match(regx)) && (name.length >= 3)) {
        console.log("valid name")
        return true;

    } else {

        console.log("invalid name ")
        return false;

    }
}

function ValidateCity(City) {
    let regx = /^([a-zA-Z ]+)([a-zA-Z ])?$/;
    if ((City.match(regx)) && (City.length >= 3)) {
        console.log("valid name")
        return true;

    } else {

        console.log("invalid name ")
        return false;

    }
}


function ValidateHours(hour) {
    let number = hour;
    let regx = /^([1-9-0]+)([1-9])?$/;


    if ((number.match(regx))) {
        console.log("valid number")

        return true;

    } else {

        console.log("ivalid number")
        return false;

    }

}
function ValidateRate(rate) {
    let number = rate;
    let regx = /^([1-9-0]+)([1-9])?$/;


    if ((number.match(regx))) {
        console.log("valid number")

        return true;

    } else {

        console.log("ivalid number")
        return false;

    }

}




function quote(hour, rate, iva, extras, service) {

    let result = 0;
    result = (hour * rate);
    let index = 0;
    let index_2 = 0;
    do {
        if (service.options[index].selected) {
            result += parseFloat(service.options[index].value);
            console.log(parseFloat(service.options[index].value))
        }
        index++;
    } while (index < service.options.length);


    do {
        if (extras.options[index_2].selected) {
            result += parseFloat(extras.options[index_2].value);
            console.log(parseFloat(extras.options[index_2].value))
        }
        index_2++;
    } while (index_2 < extras.options.length);

    if (iva) {
        result *= 1.6;
    }
    return result;
};