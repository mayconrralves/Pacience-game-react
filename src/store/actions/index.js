export const change = (stack1, stack2, index) =>{
    return {
        type: '@CHANGE',
        stack1,
        stack2,
        index
    }
}