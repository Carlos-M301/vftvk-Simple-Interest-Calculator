//Definition of variables
let amount = document.getElementById('principal');
let rate = document.getElementById('rate');
let years = document.getElementById('years');
let result = document.getElementById('result');
let rateValue = document.getElementById('rate_val');
// When the page load, the select tag with id "Years" it gonna be populated.

function compute()
{
    if(amount.value == "" || rate.value == ""|| years.value == ""){
        alert("One or more inputs are empty, please fill it");
    }
    else{
        let newYear = new Date().getFullYear()+parseInt(years.value);
        let interest = amount.value * years.value * rate.value /100;
        result.innerHTML = "If you deposit "+amount.value+",\<br\>at an interest rate of "+rate.value+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+newYear+"\<br\>";
        clearInputs();
    }
}

function populateYears(){
    for (let index = 1; index <= 10 ; index++) {
        let node = document.createElement("option")
        node.value = index;
        node.textContent = index;
        years.appendChild(node);
    }
}

function getRateValue(){
    rateValue.innerHTML = rate.value;
}

function clearInputs(){
    amount.value = "";
    rate.value = 10.25;
    years.value = "";
}

window.onload = populateYears;