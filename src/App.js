import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Main from './components/Main';
import Decks from './components/Decks';
import FinalStacks from './components/FinalStacks';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Decks />
        <Main />
        <FinalStacks/>
      </div>
    </Provider>
    
  );
}

export default App;
