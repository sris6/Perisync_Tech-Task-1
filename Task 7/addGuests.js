
let total = 0;

let totalEl = document.getElementById('total-el');


// Adult Count ... 

let adultsPlusBtn = document.getElementById('adult-plus-btn');
let adultsMinusBtn = document.getElementById('adult-minus-btn');
let adultsCounterEl = document.getElementById('adult-counter-el');
let clearBtn = document.getElementById('clear-btn');

adultsPlusBtn.addEventListener("click", adultPlusCounter);
adultsMinusBtn.addEventListener("click", adultsMinusCounter);

let adultsCount = 0;


function adultPlusCounter() {
    adultsCount = adultsCount + 1;
    adultsCounterEl.innerHTML = adultsCount;
    total = total + 1;
    totalEl.innerHTML = total;
}

function adultsMinusCounter() {

    if (adultsCount != 0) {
        adultsCount = adultsCount - 1;
        adultsCounterEl.innerHTML = adultsCount;
        total = total - 1;
        totalEl.innerHTML = total;
    }

}


// Childrens Count ... 

let childPlusBtn = document.getElementById('child-plus-btn');
let childMinusBtn = document.getElementById('child-minus-btn');
let childCounterEl = document.getElementById('child-counter-el');

childPlusBtn.addEventListener("click", childlusCounter);
childMinusBtn.addEventListener("click", childMinusCounter);

let childCount = 0;

function childlusCounter() {
    childCount = childCount + 1;
    childCounterEl.innerHTML = childCount;
    total = total + 1;
    totalEl.innerHTML = total;
}

function childMinusCounter() {

    if (childCount != 0) {
        childCount = childCount - 1;
        childCounterEl.innerHTML = childCount;
        total = total - 1;
        totalEl.innerHTML = total;
    }

}

// Infants Count ... 

let infantsPlusBtn = document.getElementById('infants-plus-btn');
let infantsMinusBtn = document.getElementById('infants-minus-btn');
let infantsCounterEl = document.getElementById('infants-counter-el');

infantsPlusBtn.addEventListener("click", infantslusCounter);
infantsMinusBtn.addEventListener("click", infantsMinusCounter);

let infantsCount = 0;

function infantslusCounter() {
    infantsCount = infantsCount + 1;
    infantsCounterEl.innerHTML = infantsCount;
    total = total + 1;
    totalEl.innerHTML = total;
}

function infantsMinusCounter() {

    if (infantsCount != 0) {
        infantsCount = infantsCount - 1;
        infantsCounterEl.innerHTML = infantsCount;
        total = total - 1;
        totalEl.innerHTML = total;
    }

}

// Pets Count ... 

let petsPlusBtn = document.getElementById('pets-plus-btn');
let petsMinusBtn = document.getElementById('pets-minus-btn');
let petsCounterEl = document.getElementById('pets-counter-el');

petsPlusBtn.addEventListener("click", petslusCounter);
petsMinusBtn.addEventListener("click", petsMinusCounter);

let petsCount = 0;

function petslusCounter() {
    petsCount = petsCount + 1;
    petsCounterEl.innerHTML = petsCount;
    total = total + 1;
    totalEl.innerHTML = total;
}

function petsMinusCounter() {

    if (petsCount != 0) {
        petsCount = petsCount - 1;
        petsCounterEl.innerHTML = petsCount;
        total = total - 1;
        totalEl.innerHTML = total;
    }

}



// Clear ... 

clearBtn.addEventListener('click', function () {
    adultsCount = 0;
    adultsCounterEl.innerHTML = adultsCount;
    childCount = 0;
    childCounterEl.innerHTML = childCount;
    infantsCount = 0;
    infantsCounterEl.innerHTML = infantsCount;
    petsCount = 0;
    petsCounterEl.innerHTML = petsCount;
    total = 0;
    totalEl.innerHTML = total;
})
