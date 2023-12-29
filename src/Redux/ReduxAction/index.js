export const restoreProduct = (products) => {
// dispatching the type and payload
    // return {
       
    //         type:"restore_the_inventory",
    //         payload: products,
      
    // }
    return (dispatch) => {
        dispatch({
            type: "restore_the_inventory",
            payload: products,
        })
    }
}

export const purchaseProduct = (purchase) => {
// dispatching the type and payload
    // return {
        
    //         type: "purchase_list",
    //         payload: purchase,
        
    // }
    return(dispatch) => {
        dispatch({
            type: "purchase_list",
            payload: purchase,
        })
    }
}

// export {restoreProduct, purchaseProduct};

// synchronus function

const loaderFunction = () => {
    return{
        type: "loading_data",
    }
}

const fetchData = (usersData) => {
    return{
        type: "fetched_userData",
        payload: usersData,
    }
}

const errorData = (errors) => {
    return {
        type: "error_hitted",
        payload: errors,
    }
}

// asynchronus action

export const fetchUserDetails = () => {
    // returning the dispatch function

    return (dispatch) => {
        // loading the component before fetching
        dispatch(loaderFunction());

        // fetching the data and also error handling

        fetch("https://63f9eb78897af748dcc59d23.mockapi.io/students",{
            method: "GET"
        })
        .then(data => data.json())
        .then(users => dispatch(fetchData(users)))
        .catch(err=> dispatch(errorData(err.message)))

        
    }
}