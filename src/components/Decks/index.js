import React from 'react'
import { connect } from 'react-redux'
import { add,remove, setOpen } from '../../store/actions/deck'
import { addMemory, removeMemory } from '../../store/actions/memory'
import { printCard } from '../../utils'
import Style from './Style'

export  function Decks( { decks, memory, removeDeck, addDeck, addMemory, removeMemory, setOpen } ){

    const changeCard = () => {
        if(memory.stack){
            removeMemory()
            return
        }
        else {
           addMemory([decks.stacks2[decks.stacks2.length-1]], 'main/', 'stacks2', decks.stacks2.length-1)
        }
    }
    const resetDeck = ( ) => {
        if(decks.stacks1.length === 0) {
            addDeck( 'main/stacks1', [ ...decks.stacks2 ].reverse() )
            removeDeck('main/stacks2',0)
        }
    }
    const drawCard = () => {
        if( decks.stacks1.length !== 0 ){
            addDeck( 'main/stacks2', [decks.stacks1[decks.stacks1.length-1] ] )
            removeDeck( 'main/stacks1', decks.stacks1.length - 1 )
            setOpen('main/stacks2', decks.stacks2.length, true)
        }
        else{
            resetDeck()
        } 
    }
    return (
        <Style>
                <img className="card" 
                    alt={decks.stacks1.length > 0 ? 'card back of stack1 deck': 'blackground stack1 - End of Deck'} 
                    src= { printCard( decks.stacks1.length > 0 ? 'verso': null ) }
                    onClick={drawCard} />
                <img className="card"
                    alt={decks.stacks2.length > 0 ? 'card front of stack2 deck': 'blackground stack2 - End of Deck'} 
                    src= { printCard( decks.stacks2.length >= 0 ? decks.stacks2[decks.stacks2.length-1] : null ) } 
                    onClick={ changeCard }
                />
        </Style>
    )
}

const mapStateToProps = state=>{
    /* As is using CombineReducers...*/
    const { Decks, Memory } = state
    return {
        decks: Decks.main,
        memory: Memory,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        removeDeck: ( stack, index ) => dispatch( remove( stack, index ) ),
        addDeck: ( stack, cards ) => dispatch( add( stack, cards ) ),
        addMemory: ( cards,sector, stack, index ) => dispatch( addMemory( cards, sector, stack, index ) ),
        removeMemory: () => dispatch( removeMemory( ) ),
        setOpen: (stack, index, value) => dispatch(setOpen(stack, index, value))
    }
}
    
export default connect( mapStateToProps, mapDispatchToProps )( Decks )