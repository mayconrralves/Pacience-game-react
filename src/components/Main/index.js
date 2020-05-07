import React from 'react' 
import { connect } from 'react-redux'
import {add, remove, setOpen } from '../../store/actions/deck'
import {addMemory, removeMemory} from '../../store/actions/memory'
import { printCard } from '../../utils'
import Style from './Style'

export  function Main({decks, addDeck, memory, removeDeck, addMemory, removeMemory, setOpen}){

    const verifyNaipe = (naipe1, naipe2) => {
        if((naipe1 === 'ouros' || naipe1 === 'copas') && (naipe2 === 'espadas' || naipe2 === 'paus')){
            return true
        }
        else if((naipe1 === 'paus' || naipe1 === 'espadas') && (naipe2 === 'ouros' || naipe2 === 'copas')){
            return true
        }
        return false
    }
    const verifyNumber =(number1, number2) => {
        if(number1 === number2-1 ){
            return true
        }
        return false
    }
    /** Return new style's class */
    const cardSelector = (sector, stack, index) => {
        if(memory.sector === sector && memory.stack === stack && memory.index === index) {
            return 'selector'
        }
        return ''
  }
    /** Open next card, whenever a card is removed of stack */
    const openCard =  (sector, stack, cardIndex) => {
        if(cardIndex < 0) {
            return
        }
        if(sector === 'field/'){
            setOpen('field/'+stack, cardIndex, true)
        }
        
    }
    /**Change cards between stacks */
    const changeCard = (stack,cardIndex) =>{
        if(memory.stack){
            if(memory.stack === stack && memory.sector === 'field/') {
                removeMemory()
                return
            }
    
                /**Is it king? */
                if(decks[stack].length === 0 && memory.cards[0].number !== 13){
                    removeMemory()
                    return
                }
                if(decks[stack].length > 0 && memory.cards[0].number === 13){
                    removeMemory()
                    return
                }
                if(decks[stack].length > 0 && !verifyNaipe(memory.cards[0].naipe, decks[stack][decks[stack].length-1].naipe)){
                    removeMemory()
                    return
                }
                if(decks[stack].length > 0 && !verifyNumber(memory.cards[0].number, decks[stack][decks[stack].length-1].number)){
                    removeMemory()
                    return
                }
                openCard(memory.sector, memory.stack, memory.index-1)
                addDeck('field/'+stack, [...memory.cards])
                removeMemory()
                
                removeDeck(memory.sector + memory.stack, memory.index)
            
        } else {
            if(decks[stack].length === 0) {
                return
            }
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
            return <img className={"card card-" +(index+1) + " " + cardSelector('field/', key, index)}
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
    return <Style theme = {{ length: maxLengthArray}}>
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
        setOpen: (stack, index, value) => dispatch(setOpen(stack, index, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)