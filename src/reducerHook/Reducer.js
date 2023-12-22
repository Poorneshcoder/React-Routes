export const reducer = (state, action) => {
    switch(action.type){
        case "add-value":
            return{...state, datas:[...state.datas, action.payload]}
            default:
                return state;
    }
}