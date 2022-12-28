
let dataArr = [];


function showData() {

    let html = '';
    for (let i = 0; i < dataArr.length; i++) {
        html += "<tr>";
        html += "<td>" + dataArr[i].name + "</td>";
        html += "<td>" + dataArr[i].age + "</td>";
        html += "<td>" + dataArr[i].address.line1 + "</td>";
        html += "<td>" + dataArr[i].address.line2 + "</td>";
        html += "<td>" + dataArr[i].address.locality + "</td>";
        html += "<td>" + dataArr[i].address.city + "</td>";
        html += "<td>" + dataArr[i].address.state + "</td>";
        html += "<td>" + dataArr[i].address.country + "</td>";
        html += "<td>" + dataArr[i].address.pinCode + "</td>";
        html += "<td>" + `<button type='button' id='delbtn' onclick='delRow(${dataArr[i].id})'>Del</button>` + "</td>";
        html += "<td>" + `<button type='button' id='editbtn' onclick='editRow(${dataArr[i].id})'>Edit</button>` + "</td>";
        html += "</tr>";
    };

    document.getElementById('t-body').innerHTML = html;

    // Map method ... 

//     dataArr.map((data) => {

//         console.log(data);


//         return document.getElementById('t-body').innerHTML = `
//         <tr>
//     <td>${data.name}</td>
//     <td>${data.age}</td>
//     <td>${data.address.line1}</td>
//     <td>${data.address.line2}</td>
//     <td>${data.address.locality}</td>
//     <td>${data.address.city}</td>
//     <td>${data.address.state}</td>
//     <td>${data.address.country}</td>
//     <td>${data.address.pinCode}</td>
//     <td><button type="button">Del</button></td>
// </tr>
//         `;
//     })


};


function addData() {

    let nameEl = document.getElementById('name').value;
    let ageEl = document.getElementById('age').value;
    let line1El = document.getElementById('line1').value;
    let line2El = document.getElementById('line2').value;
    let localityEl = document.getElementById('locality').value;
    let cityEl = document.getElementById('city').value;
    let stateEl = document.getElementById('state').value;
    let countryEl = document.getElementById('country').value;
    let pinCodeEl = document.getElementById('pinCode').value;

    if (nameEl && ageEl && pinCodeEl) {

        let id = dataArr.length + 1;

        dataArr.push({ name: nameEl, age: ageEl, address: { line1: line1El, line2: line2El, locality: localityEl, city: cityEl, state: stateEl, country: countryEl, pinCode: pinCodeEl }, id: id });
    } else {
        alert("Please fill the data !!!");
    }

    showData();
    clearData();

    console.log(dataArr);

};

function clearData() {
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('line1').value = "";
    document.getElementById('line2').value = "";
    document.getElementById('locality').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('pinCode').value = "";
};

function delRow(indexId) {

    console.log(indexId);

    dataArr.filter((data, index) => {
        if (indexId == data.id) {
            dataArr.splice(index, 1);
        };
    });


    showData();
    console.log(dataArr);

};

function editRow(indexId) {


    dataArr.filter((data, index) => {


        if (indexId == data.id) {

            document.getElementById('editform').innerHTML =
                `
        
                <h3 class="heading">Update Your Details</h3>
                <br>
                <div class="name">
                    Name : <br><input type="text" placeholder="Enter Your Name " id="editName" value=${data.name}>
                </div>
                <div class="age">
                    Age : <br><input type="number" placeholder="Enter Your Age " id="editAge" value=${data.age}>
                </div><br>
                Address : <br><br>
               <div class="line1">
                Line 1: <br><input type="text" id="editLine1" value=${data.address.line1}>
               </div>
              <div class="line2">
                Line 2: <br><input type="text" id="editLine2" value=${data.address.line2}>
              </div>
               <div class="locality">
                Locality: <br><input type="text" id="editLocality" value=${data.address.locality}>
               </div>
               <div class="city">
                City : <br><input type="text" id="editCity" value=${data.address.city}>
               </div>
               <div class="state">
                State: <br><input type="text" id="editState" value=${data.address.state}>
               </div>
               <div class="country">
                Country : <br><input type="text" id="editCountry" value=${data.address.country}>
               </div>
               <div class="pincode">
                Pin Code : <br><input type="number" id="editPinCode" value=${data.address.pinCode}>
               </div>
                <div>
                <button type="button" onclick="saveChanges(${data.id})" id = "savebtn">Save Changes</button>
                </div>


            `;

        };

    })

};

function saveChanges(indexId) {

    let editNameEl = document.getElementById('editName').value;
    let editAgeEl = document.getElementById('editAge').value;
    let editLine1El = document.getElementById('editLine1').value;
    let editLine2El = document.getElementById('editLine2').value;
    let editLocalityEl = document.getElementById('editLocality').value;
    let editCityEl = document.getElementById('editCity').value;
    let editStateEl = document.getElementById('editState').value;
    let editCountryEl = document.getElementById('editCountry').value;
    let editPinCodeEl = document.getElementById('editPinCode').value;


    dataArr.filter((data, index) => {

        if (indexId == data.id) {

            if (editNameEl && editAgeEl && editPinCodeEl) {
                data.name = editNameEl;
                data.age = editAgeEl;
                data.address.line1 = editLine1El;
                data.address.line2 = editLine2El;
                data.address.locality = editLocalityEl;
                data.address.city = editCityEl;
                data.address.state = editStateEl;
                data.address.country = editCountryEl;
                data.address.pinCode = editPinCodeEl;
            } else {
                alert("Please fill the data !!!");
            }


        }
    });

    showData();

    document.getElementById('editform').innerHTML = '';

}

