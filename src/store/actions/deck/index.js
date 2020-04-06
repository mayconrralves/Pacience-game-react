export const remove = (stack, index) =>{
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