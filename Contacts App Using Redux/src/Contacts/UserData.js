import React, { useState } from 'react'
import UserInfo from './UserInfo'
import UserList from './UserList'
import "./UserData.css"
import "./Button.css"
import AddNewUser from './AddNewUser'


const UserData = () => {

    const [fullViewData, setFullViewData] = useState(null)

    const [showAddNew, setShowAddNew] = useState(false);

    return (

        <div className='mainUserDataContainer'>

            {showAddNew && <AddNewUser showAddNew={showAddNew} setShowAddNew={setShowAddNew}/>}

            <UserList fullViewData={fullViewData} setFullViewData={setFullViewData} showAddNew={showAddNew} setShowAddNew={setShowAddNew} />

            <UserInfo fullViewData={fullViewData} setFullViewData={setFullViewData} />

        </div>

    )
}

export default UserData;
