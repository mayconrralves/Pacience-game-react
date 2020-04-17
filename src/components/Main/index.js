import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {add, remove, } from '../../store/actions/deck'
import {addMemory, removeMemory} from '../../store/actions/memory'
import { printCard } from '../../utils'
export  function Main({decks, cards,addDeck, removeDeck, addMemory, removeMemory}){
    const constroyStack = (deck)=>{
        return deck.map((card, index)=>{
            return <img src={ printCard(card.open ? card : 'verso') }
                    onClick={null}
                    key={ card.naipe + card.number }
             />
        })
    }
    const printStack = () => {
        const keys = Object.keys(decks)
        return keys.map(key=>(
                        <div key={key}>{constroyStack(decks[key])}</div>
                ))
    }
    return <div>
        {printStack()}
    </div>
}

const mapStateToProps = state => {
    const {Decks, Memory} = state
    return {
        decks: Decks.field,
        memory: Memory.recurrentCard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDeck : (stack, cards) => dispatch(add(stack, cards)),
        removeDeck : (stack, index) => dispatch(remove(stack, index)),
        addMemory : (card) => dispatch(addMemory(card)),
        removeMemory : () => dispatch(removeMemory()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)