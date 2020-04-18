
export const addMemory = (card, stack,index) =>{
    return {
        type: '@MEMORY/ADD',
        card,
        stack,
        index,
    }
}

export const removeMemory = ()=>{
    return {
        type: '@MEMORY/REMOVE',
    }
}