import { produce } from 'immer'

const INITIAL_MEMORY = {
    atualCard: null,
}
export default function Memory(state=INITIAL_MEMORY, action) {
    switch(action.type){
        case '@MEMORY/ADD':
            return produce(state, draftState=>{
                draftState.atualCard = action.card
            })
        case '@MEMORY/REMOVE':
            return produce(state, draftState=> {
                draftState.atualCard = null
            })
        default:
            return state
    }
}