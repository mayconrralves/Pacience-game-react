import {produce} from 'immer'
import deck from './Stacks'

export default function reducer(state=deck, action){
    console.log('state',state)
    switch(action.type){
        case '@ADD':
            console.log('action',action)
            return produce(state, draftState=>{
                const {stack, cards} = action
                const [main, deck] = stack.split('/')
                draftState[main][deck].push(...cards)
            })
        case '@REMOVE':
            console.log('removeu')
            return produce(state, draftState=>{
                const {stack, index} = action
                const [main, deck] = stack.split('/')
                draftState[main][deck].splice(index,draftState[main][deck].length-index )
            })
        default:
            return state
    }

}