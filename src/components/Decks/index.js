import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {add,remove} from '../../store/actions/deck'
import { addMemory, removeMemory } from '../../store/actions/memory'
import {printCard} from '../../utils'
export  function Decks({decks, memory, remove, add, addMemory, removeMemory}){
   
    const resetDeck = () => {
        if(decks.stacks1.length === 0) {
            add('main/stacks1',[ ...decks.stacks2].reverse())
            remove('main/stacks2',0)
        }
    }
    const drawCard = () => {
        if(decks.stacks1.length-1 !== -1){
            add('main/stacks2', [decks.stacks1[decks.stacks1.length-1]])
            remove('main/stacks1', decks.stacks1.length-1)
        }
        else{
            resetDeck()
        } 
        
       
        
    }
    return <div>
            <img src={printCard( decks.stacks1.length > 0 ? 'verso': null)} onClick={drawCard}/>
            <img src={printCard(decks.stacks2.length >= 0 ? decks.stacks2[decks.stacks2.length-1] : null)} 
                onClick={null}
            />
    </div>
}

const mapStateToProps = state=>{
    /* As is using CombineReducers...*/
    const { Decks, Memory } = state
    return {
        decks: Decks.main,
        memory: Memory.atualCard,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        remove: (stack, index) => dispatch(remove(stack,index)),
        add: (stack, cards) => dispatch(add(stack, cards)),
        addMemory: (card) => dispatch(addMemory(card)),
        removeMemory: () => dispatch(removeMemory()),
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(Decks)