let cardMain = document.getElementById("cardmain");


let data = [
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "North Goa, India",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "night"
    },
    {
        img: "https://imgmedia.lbb.in/media/2021/07/60f501867b2b706fbaede7af_1626669446006.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "night"
    },
    {
        img: "https://www.tripexperienceblog.com/wp-content/uploads/2021/01/chiang-mai.jpg",
        place: "Chiang Mai, Thailand",
        km: "2,335 kilometres away",
        date: "2-7 Jan",
        price: "₹9,648",
        day: "night"
    },
    {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Grand-Palace1.jpg",
        place: "Jibi, India",
        km: "2,065 kilometres away",
        date: "2-7 Jan",
        price: "₹6,846",
        day: "day"
    },
    {
        img: "https://qph.cf2.quoracdn.net/main-qimg-98a1902f4d2aacbb976b50a931795558.webp",
        place: "Koria",
        km: "499 kilometres away",
        date: "23-28 Jan",
        price: "₹28,846",
        day: "day"
    }

];


data.forEach(user =>{
    cardMain.innerHTML += `
    <div class="card" id="card">
    
                    <div class="img">
    
                        <img src="${data[i].img}" alt="">
    
                    </div>
    
                    <div class="details">
    
                        <h4>${data[i].place}</h4>
                        <p>${data[i].km}</p>
                        <p>${data[i].date}</p>
                        <h5>${data[i].price}<span> ${data[i].day}</span></h5>
    
                    </div>
    
                </div>
    `;

    return user;
})

// function displayCards() {

//     for (let i = 0; i < data.length; i++) {
//         cardMain.innerHTML += `
//     <div class="card" id="card">

//                     <div class="img">

//                         <img src="${data[i].img}" alt="">

//                     </div>

//                     <div class="details">

//                         <h4>${data[i].place}</h4>
//                         <p>${data[i].km}</p>
//                         <p>${data[i].date}</p>
//                         <h5>${data[i].price}<span> ${data[i].day}</span></h5>

//                     </div>

//                 </div>
//     `;
//     };

// };


// displayCards();

let searchBtn = document.getElementById('search');

// searchBtn.addEventListener('click', searchDisplayCards);


function searchDisplayCards() {


    let searchInput = document.getElementById('input');

    searchInput.addEventListener('input', (e) => {
        let inputValue = e.target.value.toLowerCase();

        console.log(inputValue)


        let filterMethod = data.filter((value) => {
            if (value.place.toLowerCase().includes(inputValue)) {
                return value;
            }


        });

        console.log(filterMethod)

    })

};

searchDisplayCards();



