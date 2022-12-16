let lineCartEl = document.getElementById('line-chart');



let lineConfig = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                data: [300, 500, 590, 400, 400, 650, 700],
                fill: false,
                lineTension: 0.3,
                borderColor: "#19a8f5",
                borderCapStyle: "round",
                pointRadius: 0,
                borderWidth: 4,
            },

            {
                data: [780, 500, 380, 570, 590, 390, 460],
                fill: false,
                lineTension: 0.3,
                borderColor: "#4c8bac",
                borderCapStyle: "round",
                pointRadius: 0,
                borderWidth: 4,

            },
        ]
    },

    options: {
        legend: {
            display: false
        },

        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1000,
                ticks: {
                    stepSize: 200
                }
            }
        }
    }
}



let lineChart = new Chart(lineCartEl, lineConfig);


































let barChartEl = document.getElementById('bar-chart');

let config = {

    type: "bar",

    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                data: [950, 420, 380, 1000, 950],
                backgroundColor: [
                    "#54bbf2",
                    "#54bbf2",
                    "#54bbf2",
                    "#54bbf2",
                    "#54bbf2"
                ],

            },
            {
                data: [420, 820, 600, 900, 480],
                backgroundColor: [
                    "#a7e0ff",
                    "#a7e0ff",
                    "#a7e0ff",
                    "#a7e0ff",
                    "#a7e0ff"
                ],
            },
            {
                data: [640, 210, 920, 780, 380],
                backgroundColor: [
                    "#5195b9",
                    "#5195b9",
                    "#5195b9",
                    "#5195b9",
                    "#5195b9"
                ],
            },
        ],
    },

    options: {

        legend: {
            display: false
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1000,
                ticks: {
                    stepSize: 200
                }
            },
        },


    }

};



let barChart = new Chart(barChartEl, config);






let optionsDiv = document.getElementById('optiondiv');
let optionContainar = document.getElementById('optcontainar');
let clickUpEl = document.getElementById('click-up');
let optDisplay = 0;

function optBtn() {

    if (optDisplay == 1) {
        optionsDiv.style.display = "block";
        clickUpEl.style.marginTop = "0%"
        optDisplay = 0;
    }

    else {
        optionsDiv.style.display = "none";
        clickUpEl.style.marginTop = "-62%"
        optDisplay = 1;
    }

}



let mainDiv = document.getElementById('maindiv');
let bodyDiv = document.getElementById('bodydiv');
let toggleBtn = document.getElementById('toggle-btn');
let navDiv = document.getElementById('navdiv');
let toggleBtn2 = document.getElementById('toggle-btn-2');

let overViewDiv = document.getElementById('overview');

let mainDisplay = 0;

function mainBtn() {

    if (mainDisplay == 1) {
        mainDiv.style.display = "flex";
        bodyDiv.style.backgroundColor = "#212425";
        bodyDiv.style.justifyContent = "flex-start";
        toggleBtn.style.left = "15.5%";
        navDiv.style.borderRadius = "0px"


        toggleBtn2.style.display = "none";
        toggleBtn.style.display = "flex";

        mainDisplay = 0;
    }
    else {
        mainDiv.style.display = "none";
        bodyDiv.style.backgroundColor = "white";
        bodyDiv.style.justifyContent = "center";
        toggleBtn2.style.left = "55%";
        navDiv.style.borderRadius = "18px"

        toggleBtn2.style.display = "flex";
        toggleBtn.style.display = "none";

        mainDisplay = 1;
    }
};




// let topEl=document.querySelector('.opt-name');
// let navDisplay = 0;

// function navBtn() {


//     // alert("HIii")

//     if (navDisplay == 1) {

//         navDiv.style.width = "17%"
//         toggleBtn2.style.left = "55%";
//         navDisplay = 0;
//     }
//     else {

//         topEl.style.display="none";
        
//         navDiv.style.width="5%"
//         navDiv.style.borderRadius="10px"
//         toggleBtn2.style.left = "51.5%";
//         navDisplay = 1;
//     }
// }


// let allEl = document.querySelector("*");
// let darkLightDisplay = 0;

// function darkLight(){


//     if (darkLightDisplay == 1) {



//         // bodyDiv.style.color="white"
//         allEl.style.color="white"
//         bodyDiv.style.backgroundColor="#212425"
//         darkLightDisplay = 0;

//     }

//     else {



//         // bodyDiv.style.color="black"
//         allEl.style.color="black"
//         bodyDiv.style.backgroundColor="#fff"
//         darkLightDisplay = 1;

//     }


// } 

let bodyEl = document.querySelector('body');
let bgColorOfCard = document.getElementById('bgcolorcard');
let bgColorOfBox1 = document.getElementById('income');
let bgColorOfBox2 = document.getElementById('expense');
let bgColorOfBox3 = document.getElementById('saving');
let bgColorOfSearch = document.getElementById('bgcolorsearch');

let buttonEl = document.getElementById('actual-btn');
let themeDisplay = 0;

function theme() {

    if(themeDisplay==1){


       
        bgColorOfCard.style.backgroundColor="#2A2E31"
        bgColorOfCard.style.border="1px solid rgba(255,255,255,0.2)"
        bgColorOfSearch.style.backgroundColor="#2A2E31"
        bgColorOfSearch.style.border="1px solid rgba(255,255,255,0.2)"
        bgColorOfBox1.style.backgroundColor="#2A2E31"
        bgColorOfBox1.style.border="1px solid rgba(255,255,255,0.2)"
        bgColorOfBox2.style.backgroundColor="#2A2E31"
        bgColorOfBox2.style.border="1px solid rgba(255,255,255,0.2)"
        bgColorOfBox3.style.backgroundColor="#2A2E31"
        bgColorOfBox3.style.border="1px solid rgba(255,255,255,0.2)"






buttonEl.style.color="white"
        bodyEl.style.backgroundColor="#212425"
        bodyEl.style.color="white"
        bodyEl.style.opacity="1"
        navDiv.style.backgroundColor="#212425"
            themeDisplay = 0;
    }else {

        bgColorOfCard.style.backgroundColor="#fff"
        bgColorOfCard.style.border="1px solid rgba(0,0,0,0.2)"
        bgColorOfSearch.style.backgroundColor="#fff"
        bgColorOfSearch.style.border="1px solid rgba(0,0,0,0.2)"
        bgColorOfBox1.style.backgroundColor="#fff"
        bgColorOfBox1.style.border="1px solid rgba(0,0,0,0.2)"
        bgColorOfBox2.style.backgroundColor="#fff"
        bgColorOfBox2.style.border="1px solid rgba(0,0,0,0.2)"
        bgColorOfBox3.style.backgroundColor="#fff"
        bgColorOfBox3.style.border="1px solid rgba(0,0,0,0.2)"

        buttonEl.style.color="black"

       bodyEl.style.backgroundColor="white"
       bodyEl.style.color="black"
       bodyEl.style.fontWeight="700"
       navDiv.style.backgroundColor="white"

        themeDisplay = 1;
    }
}