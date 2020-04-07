import {produce} from 'immer'
import deck from './Stacks'

export default function reducer(state=deck, action){
    switch(action.type){
        case '@ADD':
            return produce(state, draftState=>{
                const {stack, cards} = action
                const [main, deck] = stack.split('/')
                draftState[main][deck].push(...cards)
            })
        case '@REMOVE':
            return produce(state, draftState=>{
                const {stack, index} = action
                const [main, deck] = stack.split('/')
                draftState[main][deck].splice(index,draftState[main][deck].length-index )
            })
        default:
            return state
    }

}