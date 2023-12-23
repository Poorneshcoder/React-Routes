export const restoreProduct = (products) => {
// dispatching the type and payload
    return (dispatch) => {
        dispatch({
            type:"restore_the_inventory",
            payload: products,
        })
    }
}

export const purchaseProduct = (purchase) => {
// dispatching the type and payload
    return(dispatch) => {
        dispatch({
            type: "purchase_list",
            payload: purchase,
        })
    }
}

// export {restoreProduct, purchaseProduct};
