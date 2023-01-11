import Data from "./MOCK_DATA (1).json"


const ContactsReducer = (state = Data, action) => {

    switch (action.type) {

        case "ADD_NEW_CONTACT":
            return state.concat(action.payload)

        case "UPDATE_DATA":
            return state.map((list) => {
                if (list.id === action.payload.id) {
                    return action.payload
                }else {return list}
            })

        case "DELETE_DATA":
            return state.filter((list)=>{
                return list.id!==action.payload.id;
            })

        default:
            return state;
    }


}

export default ContactsReducer;
