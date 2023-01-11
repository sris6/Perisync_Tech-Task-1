import React, { useState } from 'react'

const UserProfile = (props) => {

    const { list, setFullViewData, fullViewData } = props;

    const [activateUser, setActivateUser] = useState(false)

    const activeUser = () => {

        setActivateUser(!activateUser);

        setFullViewData(list);

        console.log(fullViewData);
    }

    return (

        <div className={list?.id === fullViewData?.id ? 'activeUser' : "userProfile"} onClick={() => { activeUser() }} >

            <div className='profileImage'>

                <img src={list.avatar} alt={list.name} />

            </div>

            <div className='profileName'>

                <h4>{list.first_name + " " + list.last_name}</h4>

                <p>{list.email}</p>

            </div>

        </div>

    )
}

export default UserProfile
