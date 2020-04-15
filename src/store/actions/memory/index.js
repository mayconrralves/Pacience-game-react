
export const addMemory = (card) =>{
    return {
        type: '@MEMORY/ADD',
        card,
    }
}

export const removeMemory = ()=>{
    return {
        type: '@MEMORY/REMOVE',
    }
}