
export const adduser = (data) => {
    return {

        type: 'ADD_USER',
        payload: {
            data: data
        }


    }
}




export const edituser = (data) => {
    return {

        type:"EDIT_USER",
        payload: {
            
            data: data
        }


    }
}
// export const deleteuser = (id) => {
//     return {
//         type: 'DELETE_User',
//         id
//     }
// }

