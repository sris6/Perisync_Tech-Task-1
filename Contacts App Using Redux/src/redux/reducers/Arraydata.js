
const Arraydata = (state = [], action) => {

    switch (action.type) {
        // case 'ADD_DATA':
        //     return state
        case 'DELETE_DATA':
            return state.filter((user) => {
                return user.id !== action.payload?.id;
            });
        case 'ADD_DATA':
            return state.concat(action.payload)
        case 'DELETE_ALL':
            return []
        default:
            return state
    }
}
export default Arraydata