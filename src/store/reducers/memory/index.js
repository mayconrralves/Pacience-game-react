import { produce } from 'immer'

const INITIAL_MEMORY = {
    recurrentCard: null,
}
export default function Memory(state=INITIAL_MEMORY, action) {
    switch(action.type){
        case '@MEMORY/ADD':
            return produce(state, draftState=>{
                draftState.recurrentCard = action.card
            })
        case '@MEMORY/REMOVE':
            return produce(state, draftState=> {
                draftState.recurrentCard = null
            })
        default:
            return state
    }
}