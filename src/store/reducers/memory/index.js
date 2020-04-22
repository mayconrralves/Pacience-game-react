import { produce } from 'immer'

const INITIAL_MEMORY = {
    sector: '',
    stack: '',
    cards: [],
    index: -1
}

export default function Memory( state=INITIAL_MEMORY, action ) {
    switch( action.type ){
        case '@MEMORY/ADD':
            return produce(state, draftState=> {
                draftState.cards.push( ...action.cards ) 
                draftState.stack = action.stack
                draftState.index = action.index
                draftState.sector = action.sector
            })
        case '@MEMORY/REMOVE':
            return produce(state, draftState=> {
                draftState.cards.splice(0, draftState.cards.length)
                draftState.stack = ''
                draftState.index = -1
                draftState.sector = ''
            })
        default:
            return state
    }
}