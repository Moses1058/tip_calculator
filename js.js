// -------- DECLARING VABIABLES -----

//  INPUT
const bill_input = document.querySelector('.bill');
let bill;
// --------------------
const people_input = document.querySelector('.people');
let people;
// --------------------
const custom_input = document.querySelector('.custom_tip');
// let custom;
let tip_percent;
let tip;
// --------------------
const percentButtons = document.getElementsByClassName('percent_button');

let preButton = 5;
//  OUTPUT
let tip_per;
let bill_per;
// ---------------------
const resetButton = document.getElementById('reset_button');
// ---------------------
const tip_output = document.querySelector('#tip_per');
// ---------------------
const bill_output = document.querySelector('#bill_per');

// console.log(bill_output.textContent);
// console.log(tip_output.textContent);



// ----- ADD EVENT LISTENERS -------

bill_input.addEventListener('input', function (event) {
    bill = Number(event.target.value);
    // console.log(bill);
    activeReset();
    // calcBill();
    // calcTotal();
    showTotal();
});
people_input.addEventListener('input', function (event) {
    people = Number(event.target.value);
    // console.log(people);
    cantBe(people);
    activeReset();
    // calcBill();
    // calcTotal();
    showTotal();
});
custom_input.addEventListener('input', function (event) {
    tip_percent = Number(event.target.value);
    if (tip != null && preButton < 5) changeButtons(0);
    activeReset();
    // console.log(tip);
    // calcTotal();
    showTotal();
});




// --- HELPFUL FUNCTIONS ----


// This function takes people input value and show alert text and red border if it's 0 or null
const cantBe = function (x) {
    const cant_text = document.querySelector('.alert');
    if (x == 0 || x == null) {
        cant_text.style.display = 'block';
        people_input.style.borderColor = '#E17052';
    } else {
        cant_text.style.display = 'none';
        people_input.style.borderColor = '#F3F9FA';
    }
}
// This function is for change percent buttons colors to its default or active status. 
// first input is number that function understands button should return to normal or change to active otherwise. 
// Second input is which button should be changed

const changeButtons = function (x, y = preButton) {
    if (!x) {
        if (preButton < 5) {
            percentButtons[y].style.backgroundColor = '';
            percentButtons[y].style.color = '';
        }
    } else {
        percentButtons[y].style.backgroundColor = '#26C2AE';
        percentButtons[y].style.color = '#00474B';
    }
}

// There is function which will change reset button's bg color when it should be active(when user types something in inputs)
//  ! It should be implement in inputs event Listeners
const activeReset = function () {
    resetButton.style.backgroundColor = '#26C2AE';
    resetButton.style.color = 'rgba(0, 71, 75, 1)';
}

const defaultTotal = function () {
    tip_output.textContent = '$0.00';
    bill_output.textContent = '$0.00';
}

// ---- FUNCTIONS FOR CALCULATE -----

const calcTotal = function () {
    tip = bill * tip_percent / 100;
    tip_per = tip / people;
    tip_per = Number(tip_per.toFixed(2));

    bill_per = (tip + bill) / people;
    bill_per = Number(bill_per.toFixed(2));

    // console.log(people, bill, tip, tip_per, bill_per);
}
const showTotal = function () {
    calcTotal();
    tip_output.textContent = '$' + tip_per;
    bill_output.textContent = '$' + bill_per;
}

//  ------ ON CLICK FUNCTIONS FOR BUTTONS -------
const buttonClick = function (x) {
    custom_input.value = '';
    changeButtons(1, x);
    changeButtons(0);
    preButton = x;

    tip_percent = parseInt(percentButtons[x].textContent);
    // console.log(tip);

    activeReset();
    // calcTotal();
    showTotal();
}

const resetButtonClick = function () {
    resetButton.style.backgroundColor = '';
    resetButton.style.color = '';
    changeButtons(0);
    defaultTotal();
}


