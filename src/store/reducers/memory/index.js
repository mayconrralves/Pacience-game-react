import { produce } from 'immer'

const INITIAL_MEMORY = {
    stack: '',
    recurrentCard: null,
    index: -1

}
export default function Memory(state=INITIAL_MEMORY, action) {
    switch(action.type){
        case '@MEMORY/ADD':
            return produce(state, draftState=>{
                draftState.recurrentCard = action.card 
                draftState.stack = action.stack
                draftState.index = action.index
            })
        case '@MEMORY/REMOVE':
            return produce(state, draftState=> {
                draftState.recurrentCard = null
                draftState.stack = ''
                draftState.index = -1
            })
        default:
            return state
    }
}