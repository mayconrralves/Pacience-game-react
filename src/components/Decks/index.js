import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {add,remove} from '../../store/actions/deck'

export  function Decks({decks, remove, add}){
     
    return <div>
        Decks
    </div>
}

const mapStateToProps = state=>{
    /* As is using CombineReducers...*/
    const { Decks } = state
    return {
        decks: Decks.main,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        remove: (stack, index) => dispatch(remove(stack,index)),
        add: (stack, cards) => dispatch(add(stack, cards))
    }
}
    

export default connect(mapStateToProps, mapDispatchToProps)(Decks)