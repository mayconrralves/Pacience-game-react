
export const addMemory = (cards,sector, stack,index) =>{
    return {
        type: '@MEMORY/ADD',
        cards,
        stack,
        index,
        sector
    }
}

export const removeMemory = ()=>{
    return {
        type: '@MEMORY/REMOVE',
    }
}