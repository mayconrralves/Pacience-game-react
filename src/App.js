import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Main from './components/Main'
import Decks from './components/Decks'
import FinalStacks from './components/FinalStacks'
import GlobalStyle from './style'

function App() {
  return (
    <Provider store={store}>
      <div>
       <GlobalStyle />
        <Decks />
        <FinalStacks/>
        <Main />
        
      </div>
    </Provider>
    
  );
}

export default App;
