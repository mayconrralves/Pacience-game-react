import {produce} from 'immer'
import deck from './Stacks'

export default function reducer(state=deck, action){
    console.log(state)
    switch(action.type){
        default:
            return state
    }

}