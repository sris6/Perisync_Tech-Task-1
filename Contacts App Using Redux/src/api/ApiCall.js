// import axios from 'axios'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export const UserCheck = (details) => {
//     return (dispatch) => {
//         // dispatch(fetchUserRequest)
//         axios.post("https://api.perisync.com/user/check", {
//             "email": details.email
//         })
//             .then(res => {
//                 dispatch({
//                     type: "USER_CHECK",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 toast("Invalid Mail Id")
//             })
//     }
// }

// export const PasswordVerify = (details) => {
//     return (dispatch) => {
//         // dispatch(fetchUserRequest)
//         axios.put("https://api.perisync.com/user/get/password", {
//             "email": details.email,
//             "password": details.password
//         })
//             .then(res => {
//                 dispatch({
//                     type: "PASSWORD_CHECK",
//                     payload: { ...details, res }
//                 })
//                 localStorage.setItem('token', res?.data?.token);
//                 localStorage.setItem('userid', res?.data?.userid);
//                 localStorage.setItem('refresh_token', res?.data?.refresh_token);
//             })
//             .catch(err => {
//                 // alert("wrong data")
//                 toast("Invalid Password")
//             })
//     }
// }

// export const logoutApi = (details) => {
//     return (dispatch) => {
//         // dispatch(fetchUserRequest)
//         axios.put("https://api.perisync.com/user/logout", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "LOG_OUT",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "LOG_OUT_FAILED",
//                     payload: { ...details, err }
//                 })
//             })
//     }
// }



// export const getinfoApi = (details) => {
//     return (dispatch) => {
//         // dispatch(fetchUserRequest)
//         axios.put("https://api.perisync.com/user/get/one", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "GET_INFO",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "GET_INFO_FAILED",
//                     payload: { ...details, err }
//                 })
//             })
//     }
// }


// export const ImgUploadApi = (formData) => {
//     return (dispatch) => {
//         // dispatch(fetchUserRequest)
//         axios.post("https://api.perisync.com/user/store/img", formData)
//             .then(res => {
//                 dispatch({
//                     type: "IMG_UPLOAD",
//                     payload: { res }
//                 })
//             })
//             .catch(err => {
//                 toast("Image not Uploaded")
//             })
//     }
// }



// export const ProfileUpdate = (details) => {
//     return (dispatch) => {


//         axios.put("https://api.perisync.com/user/update", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "PROFILE_UPDATE",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "PROFILE_UPDATE_FAILED",
//                     payload: { ...details, err }
//                 })
//                 toast("Something went wrong")
//             })
//     }

// }


// export const GetTableSession = (details) => {
//     return (dispatch) => {


//         axios.put("https://api.perisync.com/su/active/sessions", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "GET_TABLE",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "GET_TABLE_FAILED",
//                     payload: { ...details, err }
//                 })
//                 toast("Something went wrong")
//             })
//     }

// }




// export const GetGraphSession = (details) => {
//     return (dispatch) => {


//         axios.put("https://api.perisync.com/admin/building/daily", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "GET_GRAPH",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "GET_GRAPH_FAILED",
//                     payload: { ...details, err }
//                 })
//                 toast("Something went wrong")
//             })
//     }

// }





// export const SidemenuAPI = (details) => {
//     return (dispatch) => {


//         axios.put("https://api.perisync.com/show/menuByRoleID", {
//             ...details
//         })
//             .then(res => {
//                 dispatch({
//                     type: "SIDE_MENU",
//                     payload: { ...details, res }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "SIDE_MENU_FAILED",
//                     payload: { ...details, err }
//                 })
//                 toast("Something went wrong")
//             })
//     }

// }