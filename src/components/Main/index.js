import React from 'react' 
import { connect } from 'react-redux'
import {add, remove, } from '../../store/actions/deck'
import {addMemory, removeMemory} from '../../store/actions/memory'
import { printCard } from '../../utils'
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
            return <img src={ printCard(null) }
                    onClick={() => changeCard(key, 0)}
                    key={ key+'_null' }
             />
        }
        return decks[key].map((card, index)=>{
            return <img src={ printCard(card.open ? card : 'verso') }
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
    return <div>
        {printStack()}
    </div>
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