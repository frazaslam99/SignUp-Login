

const initialState = {
    users: [],

}
const signupreducer = (state = initialState, action) => {

    switch (action.type) {


        case "ADD_USER":

            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]

            }

        case "EDIT_USER":
         

        const  updateuser=   state.users.map((user) => {
                if (user.data.id == action.payload.data.id) {
                      
                     return  action.payload
                                   
                }
                
                return user;
                
            })
            return {
                ...state,
                users: updateuser
            }








        default: return state;
    }
}
export default signupreducer;