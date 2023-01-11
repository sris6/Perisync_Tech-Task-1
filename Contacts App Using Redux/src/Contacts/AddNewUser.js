import React, { useState } from 'react'
import { X } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux';

const AddNewUser = ({ showAddNew, setShowAddNew }) => {

  const dispatch = useDispatch();

  const userData = useSelector(state => state?.ContactsReducer);

  console.log(userData.length)



  const [newData, setNewData] = useState({

    "id": userData.length + 1,
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "job_title": "",
    "avatar": "",
    "joined_at": "",
    "address": {
      "line1": "",
      "city": "",
      "state": "",
      "country": ""
    },
    "active": null
  })

  console.log(newData)

  const addNewContact = () => {

    if (newData.first_name && newData.last_name && newData.email && newData.gender && newData.job_title) {

      dispatch({ type: "ADD_NEW_CONTACT", payload: newData });

      setShowAddNew(!showAddNew);

    } else {
      alert("Please, fill the details .")
    }

  }

  return (

    <div className='addNewUserContainer'>

      <div className='newContactForm'>

        <div className='formHead'>

          <h3>Add New Contact</h3>

          <div>
            <button className='addNewContactCloseBtn' onClick={() => { setShowAddNew(!showAddNew) }}><X color='grey' size={20} /></button>
          </div>

        </div>

        <div className='mainForm'>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="first_name">First Name</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your first name...' id='first_name' onChange={(e) => { setNewData({ ...newData, first_name: e.target.value }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="last_name">Last Name</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your last name...' id='last_name' onChange={(e) => { setNewData({ ...newData, last_name: e.target.value }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="email">Email</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your Email...' id='email' onChange={(e) => { setNewData({ ...newData, email: e.target.value }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label>Gender</label>

            </div>

            <div className='radioBtns'>

              :

              <div className='options'>

                <input type='radio' id='male' name='gender' onChange={(e) => { setNewData({ ...newData, gender: "Male" }) }} /> <label for="male">Male</label>

              </div>

              <div className='options'>

                <input type='radio' id='female' name='gender' onChange={(e) => { setNewData({ ...newData, gender: "Female" }) }} /> <label for="female">Female</label>

              </div>

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="job">Job Title</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your Job title...' id='job' onChange={(e) => { setNewData({ ...newData, job_title: e.target.value }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="avatar">Avatar</label>

            </div>

            <div className='inputBox'>

              :<input type='url' placeholder='Enter your Avatar URL...' id='avatar' onChange={(e) => { setNewData({ ...newData, avatar: e.target.value }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label>Active Status</label>

            </div>

            <div className='radioBtns'>

              :

              <div className='options'>

                <input type='radio' id='active' name='active' onChange={(e) => { setNewData({ ...newData, active: true }) }} /> <label for="active">True</label>

              </div>

              <div className='options'>

                <input type='radio' id='not_active' name='active' onChange={(e) => { setNewData({ ...newData, active: false }) }} /> <label for="not_active">False</label>

              </div>

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="line1">Line 1</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your address...' id='line1' onChange={(e) => { setNewData({ ...newData, address: { ...newData?.address, line1: e.target.value } }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="city">City</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your City...' id='city' onChange={(e) => { setNewData({ ...newData, address: { ...newData?.address, city: e.target.value } }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="state">State</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your State...' id='state' onChange={(e) => { setNewData({ ...newData, address: { ...newData?.address, state: e.target.value } }) }} />

            </div>

          </div>

          <div className='inputContainar'>

            <div className='labelBox'>

              <label for="country">Country</label>

            </div>

            <div className='inputBox'>

              :<input type='text' placeholder='Enter your Country...' id='country' onChange={(e) => { setNewData({ ...newData, address: { ...newData?.address, country: e.target.value } }) }} />

            </div>

          </div>

        </div>

        <div className='addContactBtn'>

          <button className='saveBtn' onClick={() => { addNewContact() }}>Save Contact</button>

        </div>

      </div>
    </div>
  )
}

export default AddNewUser
