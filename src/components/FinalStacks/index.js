import React from 'react'
import { connect } from 'react-redux'
import { add, remove } from '../../store/actions/deck'
import { addMemory, removeMemory } from '../../store/actions/memory'
import { printCard } from '../../utils'
export function FinalStacks( { final, memory, addDeck,addMemory, removeDeck, removeMemory } ){
    const changeCard = ( stack, cardIndex ) =>{
        if(memory.stack){
            if(memory.stack === stack) {
                removeMemory()
                return
            }
            if(memory.cards.length > 1) {
                removeMemory()
                return
            }
            if(Array.isArray(memory.cards)){
                addDeck('final/'+stack, [...memory.cards])
                removeMemory()
                removeDeck(memory.sector + memory.stack, memory.index)
            }
        } else {
            //addMemory([...final[stack].slice(cardIndex, final[stack].length-cardIndex)], stack, cardIndex)
        }
    }
    return <div>
        <img src={ printCard( final.stacks1.length ? final.stacks1[final.stacks1.length-1] : null ) } 
             onClick={ ()=> changeCard('stacks1', final.stacks1.length-1) }
         />
        <img src={ printCard( final.stacks2.length ? final.stacks2[final.stacks2.length-1] : null ) } 
            onClick={ ()=> changeCard('stacks2',final.stacks1.length-1) }
         />
        <img src={ printCard( final.stacks3.length ? final.stacks3[final.stacks3.length-1] : null ) }
             onClick={ ()=> changeCard('stacks3',final.stacks1.length-1) } 
        />
        <img src={ printCard( final.stacks4.length ? final.stacks4[final.stacks4.length-1] : null ) } 
             onClick={ ()=> changeCard('stacks4',final.stacks1.length-1) } 
        />
    </div>
}

const mapStateToProps = state =>{
    const {Decks, Memory} = state
    return {
            final: Decks.final,
            memory: Memory
        }
    }

const mapDispatchToProps = dispatch =>{
    return {
        addDeck: (stack, cards) => dispatch(add(stack, cards)),
        removeDeck: (stack, index) => dispatch(remove(stack, index)),
        addMemory: ( cards,sector, stack, index) => dispatch(addMemory(cards,sector, stack,index)),
        removeMemory: () => dispatch(removeMemory())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FinalStacks)