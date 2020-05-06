import React from 'react'
import { connect } from 'react-redux'
import { add, remove, setOpen } from '../../store/actions/deck'
import { addMemory, removeMemory } from '../../store/actions/memory'
import { printCard } from '../../utils'
import Style from './Style'

export function FinalStacks( { final, memory, addDeck,addMemory, removeDeck, removeMemory, setOpen } ){

    /** Return new style's class */
    const cardSelector = (sector, stack, index) => {
        if(memory.sector === sector && memory.stack === stack && memory.index === index) {
            return 'selector'
        }
        return ''
  }

    const changeCard = ( stack, cardIndex ) => {
        if(memory.stack){
            if(memory.sector === 'final/' && memory.stack === stack) {
                removeMemory()
                return
            }
            if(memory.cards.length > 1) {
                removeMemory()
                return
            }
            if(Array.isArray(memory.cards)){
                if(memory.sector === 'field/'){
                    console.log("open", memory.stack, memory.index)
                    setOpen(memory.sector + memory.stack, memory.index-1, true)
                }
                if(memory.sector !== 'final/'){
                    addDeck('final/'+stack, [...memory.cards])
                    removeMemory()
                    removeDeck(memory.sector + memory.stack, memory.index)
                }else {
                    removeMemory()
                }
                
            }
        } else {
            if(final[stack].length === 0) {
                return
            }
            addMemory([final[stack][cardIndex]],'final/', stack, cardIndex)
        }
    }
    return <Style>
                <img className={"card "+ cardSelector('final/', 'stacks1', final.stacks1.length-1 )}
                    alt="Final Decks - Stack01"
                    src={ printCard( final.stacks1.length ? final.stacks1[final.stacks1.length-1] : null ) } 
                    onClick={ ()=> changeCard('stacks1', final.stacks1.length-1) }
                />
                <img className={"card "+ cardSelector('final/', 'stacks2', final.stacks2.length-1 )}
                    alt="Final Decks - Stack02"
                    src={ printCard( final.stacks2.length ? final.stacks2[final.stacks2.length-1] : null ) } 
                    onClick={ ()=> changeCard('stacks2',final.stacks2.length-1) }
                />
                <img className={"card "+ cardSelector('final/', 'stacks3', final.stacks3.length-1 )}
                    alt="Final Decks - Stack03"
                    src={ printCard( final.stacks3.length ? final.stacks3[final.stacks3.length-1] : null ) }
                    onClick={ ()=> changeCard('stacks3',final.stacks3.length-1) } 
                />
                <img className={"card "+ cardSelector('final/', 'stacks4', final.stacks4.length-1 )}
                    alt="Final Decks - Stack04"
                    src={ printCard( final.stacks4.length ? final.stacks4[final.stacks4.length-1] : null ) } 
                    onClick={ ()=> changeCard('stacks4',final.stacks4.length-1) } 
                />
            </Style> 
        
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
        removeMemory: () => dispatch(removeMemory()),
        setOpen: (stack, index, value) => dispatch(setOpen(stack, index, value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FinalStacks)