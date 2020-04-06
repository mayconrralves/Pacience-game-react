import React from 'react'
import { connect } from 'react-redux'

export  function Decks({decks}){
    console.log('Decks:', decks)
    return <div>
        Decks
    </div>
}

const mapStateToProps = state=>{
    /* As is using CombineReducers...*/
    const { Decks } = state
    return {
        decks: Decks.mainDecks,
    }
}
    

export default connect(mapStateToProps)(Decks)