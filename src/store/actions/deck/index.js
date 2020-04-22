export const remove = ( stack, index) =>{
    return {
        type: '@REMOVE',
        stack,
        index
    }
}

export const add = (stack, cards) => {
    return {
        type: '@ADD',
        stack,
        cards
    }
}

export const setOpen = ( stack, index, value ) => {
    return {
        type: '@SET_OPEN',
        stack,
        index,
        value
    }
}