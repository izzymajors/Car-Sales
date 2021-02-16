export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";


export const addItem = (name) => {
    return({
        type:ADD_ITEM,
        payload:name
    });
}

export const removeItem = (name) => {
    return({
        type: REMOVE_ITEM,
        payload:name
    });
}