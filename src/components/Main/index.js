import React from 'react' 
import { connect } from 'react-redux'
import {add, remove, } from '../../store/actions/deck'
import {addMemory, removeMemory} from '../../store/actions/memory'
import { printCard } from '../../utils'
import Style from './Style'
export  function Main({decks, addDeck, memory, removeDeck, addMemory, removeMemory}){

    const changeCard = (stack,cardIndex) =>{
        if(memory.stack){
            if(memory.stack === stack && memory.sector === 'field/') {
                removeMemory()
                return
            }
            if(Array.isArray(memory.cards)){
                addDeck('field/'+stack, [...memory.cards])
                removeMemory()
                removeDeck(memory.sector+ memory.stack, memory.index)
            }
        } else {
            const recurrent = [...decks[stack].slice(cardIndex, decks[stack].length)]
            if(recurrent[0].open === false) {
                return
            }
            addMemory(recurrent,'field/', stack, cardIndex)
        }
    }
    const constroyStack = (key)=>{
        if(decks[key].length === 0) {
            return <img className={"card"} src={ printCard(null) }
                    alt="background-stack"
                    onClick={() => changeCard(key, 0)}
                    key={ key+'_null' }
             />
        }
        return decks[key].map((card, index)=>{
            return <img className={"card card-" +(index+1)}
                    alt={"card card-" +(index+1)}
                    src={ printCard(card.open ? card : 'verso') }
                    onClick={() => changeCard(key, index)}
                    key={ card.naipe + card.number }
             />
        })
    }
    const printStack = () => {
        const keys = Object.keys(decks)
        return keys.map(key=>(
                    <div key={key}>{constroyStack(key)}</div>
                ))
    }
    const keys = Object.keys(decks)
    /** Discovery the largest of array and return the value*/
    const lengthsArray = keys.map((key)=>{
        return decks[key].length
    })
    const maxLengthArray = lengthsArray.reduce((value1, value2)=> {
        return Math.max(value1, value2)
    })
    return <Style theme = {{ length: maxLengthArray }}>
                     {printStack()}
            </Style>
}

const mapStateToProps = state => {
    const {Decks, Memory} = state
    return {
        decks: Decks.field,
        memory: Memory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDeck : (stack, cards) => dispatch(add(stack, cards)),
        removeDeck : (stack, index) => dispatch(remove(stack, index)),
        addMemory : (cards, sector, stack, index) => dispatch(addMemory(cards, sector, stack, index)),
        removeMemory : () => dispatch(removeMemory()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)