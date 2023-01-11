import React, { useState } from 'react'
import { ArrowLeft, Check, Edit, Trash, X } from 'react-feather'
import { useDispatch } from 'react-redux';

const UserInfo = ({ fullViewData, setFullViewData }) => {

    const [localState, setLocalState] = useState(null);

    // console.log(fullViewData)

    const dispatch = useDispatch();

    console.log(localState)


    const updateData = () => {

        setFullViewData(localState)

        dispatch({ type: "UPDATE_DATA", payload: localState });

        setLocalState(null)

    }

    const deleteUser = () => {

        console.log("deleted")

        setFullViewData(localState)

        dispatch({ type: "DELETE_DATA", payload: fullViewData });

        // setLocalState(null)

    }

    return (

        <div className='userInfo'>

            {fullViewData === null &&

                <div className='notSelected'>

                    <ArrowLeft size={25} />

                    <p>Select a user from the list</p>

                </div>}

            {fullViewData &&

                <div className='userSelected'>

                    <div className='profileCard'>

                        <div className='profilePicContainar'>

                            <div className='profilePic'>

                                <img src={fullViewData.avatar} alt={fullViewData.first_name} />

                            </div>

                            <div className={fullViewData.active ? 'activeBtn' : 'noActive'}>.</div>

                        </div>

                        <div className='profileInfo'>

                            <h3>{fullViewData.first_name + " " + fullViewData.last_name}</h3>

                            <p>{fullViewData.email}</p>

                        </div>

                        {localState === null && <button className='closeBtn' onClick={() => { setFullViewData(null) }}>x</button>}

                        {localState === null && <button className='editBtn' onClick={() => { setLocalState(fullViewData) }}><Edit size={16} /></button>}

                        {localState === null && <button className='delBtn' onClick={() => { deleteUser() }}><Trash size={16} /></button>}

                        {localState !== null && <button className='editCheckBtn' onClick={() => { updateData() }}><Check size={16} /></button>}

                        {localState !== null && <button className='editCloseBtn' onClick={() => { setLocalState(null) }}><X size={16} /></button>}

                    </div>

                    <div className='personalInfo'>

                        <div className='personalInfo_text'>

                            <h3>Personal Info</h3>

                        </div>

                        <div className='personalInfo_box'>

                            {localState === null ? <div>
                                First Name : {fullViewData.first_name}
                            </div> : <div>
                                First Name : <input value={localState?.first_name} onChange={(e) => { setLocalState({ ...localState, first_name: e.target.value }) }} />
                            </div>}

                            {localState === null ? <div>
                                Last Name : {fullViewData.last_name}
                            </div> : <div>
                                Last Name : <input value={localState?.last_name} onChange={(e) => { setLocalState({ ...localState, last_name: e.target.value }) }} />
                            </div>}

                            {localState === null ? <div>
                                Gender : {fullViewData.gender}
                            </div> : <div>
                                Gender : <input value={localState?.gender} onChange={(e) => { setLocalState({ ...localState, gender: e.target.value }) }} />
                            </div>}

                            {localState === null ? <div>
                                Job title : {fullViewData.job_title}
                            </div> : <div>
                                Job title : <input value={localState?.job_title} onChange={(e) => { setLocalState({ ...localState, job_title: e.target.value }) }} />
                            </div>}

                        </div>

                    </div>

                    <div className='address'>

                        <div className='address_text'>

                            <h3>Address</h3>

                        </div>

                        {/* onChange={(e) => {
                                    setLocalState({
                                        ...localState,
                                        address: {
                                            ...localState?.address, line1: e.target.value
                                        }
                                    } }} */}

                        <div className='address_box'>

                            {localState === null ? <div>
                                Line1 : {fullViewData.address.line1}
                            </div> : <div>
                                Line1 :  <input value={localState?.address.line1} onChange={(e) => {
                                    setLocalState({ ...localState, address: { ...localState?.address, line1: e.target.value } })
                                }} />
                            </div>}

                            {localState === null ? <div>
                                City : {fullViewData.address.city}
                            </div> : <div>
                                City :  <input value={localState?.address.city} onChange={(e) => {
                                    setLocalState({ ...localState, address: { ...localState?.address, city: e.target.value } })
                                }} />
                            </div>}

                            {localState === null ? <div>
                                State : {fullViewData.address.state}
                            </div> : <div>
                                State :  <input value={localState?.address.state} onChange={(e) => {
                                    setLocalState({ ...localState, address: { ...localState?.address, state: e.target.value } })
                                }} />
                            </div>}

                            {localState === null ? <div>
                                Country : {fullViewData.address.country}
                            </div> : <div>
                                Country :  <input value={localState?.address.country} onChange={(e) => {
                                    setLocalState({ ...localState, address: { ...localState?.address, country: e.target.value } })
                                }} />
                            </div>}

                        </div>

                    </div>

                </div>}

        </div>
    )
}

export default UserInfo
