let optEl = document.getElementById("opts-sec");

let optData = [
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    },
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    },
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    },
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    },
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    },
    {
        icon: "fa fa-home",
        title: "Beach Front"
    },
    {
        icon: "fa fa-pagelines",
        title: "Amazing views"
    },
    {
        icon: "fa fa-leaf",
        title: "Amazing pools"
    },
    {
        icon: "fa fa-snowflake-o",
        title: "Surfing"
    },
    {
        icon: "fa fa-bed",
        title: "Containers"
    },
    {
        icon: "fa fa-sun-o",
        title: "Farms"
    }
];

for (let i = 0; i < optData.length; i++) {
    optEl.innerHTML += `
    
    <div class="opt-box">

    <i class="${optData[i].icon}" aria-hidden="true"></i>

    <p>${optData[i].title}</p>

</div>
    `;
}