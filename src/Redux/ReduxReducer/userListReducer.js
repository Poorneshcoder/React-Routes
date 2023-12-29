const initialState = {
    loading: false,
    users : [],
    errors : "",
}

const userListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "loading_data":
            return {...state, loading:true, errors:"",users:[]}

        case "fetched_userData":
            return {...state, users:action.payload, loading:false}

        case "error_hitted":
            return {...state, errors:action.payload, loading:false,users:[]}

        default:
            return state;
    }
}

export default userListReducer;