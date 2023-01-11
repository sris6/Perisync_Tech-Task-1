import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { Plus, Search } from 'react-feather'


const UserList = ({ fullViewData, setFullViewData ,showAddNew, setShowAddNew}) => {



    const userData = useSelector(state => state?.ContactsReducer);

    console.log(userData);

    const [searchValue, setSearchValue] = useState("");

    console.log(searchValue);

    // const filterdatalist = Data?.length > 0 && Data?.filter((d) => {

    //     if (d.first_name && d.last_name && searchValue) {
    //         return (d?.first_name?.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1 ||
    //             d?.last_name?.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1)
    //     }
    //     else { return d }
    // })


    const filterdatalist = userData?.length > 0 && userData?.filter((d) => {

        if (d.first_name && d.last_name && searchValue) {
            return (d?.first_name?.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
                d?.last_name?.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        }
        else { return d }
    });


    return (

        <div className='userList'>

            <div className='searchBoxContainer'>

                <div className='searchBox'>

                    {!searchValue && <Search color='grey' size={22} style={{ marginRight: "10px" }} />}

                    <input type="text" placeholder='Search a contact...' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}></input>



                    {searchValue && <button className='clearBtn' onClick={() => { setSearchValue("") }}>x</button>}


                </div>

                <button className='addNewUser' onClick={()=>{setShowAddNew(!showAddNew)}}><Plus /></button>

            </div>

            <div className='userProfileContainer'>

                {filterdatalist.map((list) => {
                    return (
                        <UserProfile list={list} fullViewData={fullViewData} setFullViewData={setFullViewData} />
                    )
                })}


            </div>

        </div>
    )

}

export default UserList
