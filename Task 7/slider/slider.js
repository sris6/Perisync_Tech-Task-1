
let arr= [
    {
        name:"python",
        role:"backend"
    },
    {
        name:"js",
        role:"frontend"
    },
    {
        name:"html",
        role:"frontend"
    },
    {
        name:"css",
        role:"frontend"
    },
    {
        name:"java",
        role:"backend"
    }
];


let itemEl = document.getElementById('item-wrapper');

for (let i=0;i<arr.length;i++){
    itemEl.innerHTML += `<li>${arr[i].name}</li>`;

    // itemEl.classList.toggle('hide')
    console.log(itemEl)
}

itemEl.
console.log(itemEl.children)


let search = document.querySelector('#search');

search.addEventListener("input", e=>{

    let value = e.target.value.toLowerCase();
    console.log(value);

    for (let i=0; i<arr.length;i++){

        let isVisible = arr[i].name.toLowerCase().includes(value);

        arr[i].element.classList.toggle('hide',!isVisible)

    }

    })
    



