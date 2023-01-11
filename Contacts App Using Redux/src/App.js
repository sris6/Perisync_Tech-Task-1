// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MainApp from './MainApp';




function App() {

  // const UserList = useSelector(state => state?.Arraydata)

  // const dispatch = useDispatch()

  // console.log(UserList);


  // const [inputValue, setInputValue] = useState({ id: 0, username: "", password: "" });

  // console.log(inputValue);


  // const addData = () => {

  //   inputValue.id = inputValue.id + 1;

  //   localStorage.setItem("name",inputValue.username)
  //   localStorage.setItem("pass",inputValue.password)

  //   dispatch({ type: "ADD_DATA", payload: inputValue })

  // }

  // console.log(localStorage.getItem("name"));
  // console.log(localStorage.getItem("pass"));





  // return (

  //   <div className='mainnav'>

  //     {/* New React Project with Redux Setup{UserList} */}


  //     <input type="text" placeholder='Enter UserName' onChange={(e) => { setInputValue({ ...inputValue, username: e.target.value }) }}></input>
  //     <input type="text" placeholder='Enter Password' onChange={(e) => { setInputValue({ ...inputValue, password: e.target.value }) }}></input>
  //     <button onClick={() => {addData()}}>Submit</button>

  //     <div>
  //       {UserList.map((list) => {
  //         return (
  //           <div>
  //             <p>UserName : {list.username}</p>
  //             <p>Password : {list.password}</p>
  //             <button onClick={() => { dispatch({ type: "DELETE_DATA", payload: list }) }}>Delete</button>
  //           </div>
  //         )
  //       })}
  //       <button onClick={() => { dispatch({ type: "DELETE_ALL"}) }}>Delete ALL</button>
  //     </div>


  //   </div>
  // );





  return (

    <div className="bodyOfTheApp">

      <MainApp/>

    </div>

  )

}
export default App;
