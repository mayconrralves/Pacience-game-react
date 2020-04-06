import {beginDeck} from './constroy';

function Stacks(){
   
    let k = 0;
    let nextValue = 2;
    /** The ultimate card of each stack is defined as open*/
          do {
                beginDeck[k].open = true;
                k += nextValue;
                nextValue++;  
          }
          while (k < 29 )
        
        return {

                field:{
                    stacks1: beginDeck.slice(0,1),
                    stacks2: beginDeck.slice(1,3),
                    stacks3: beginDeck.slice(3,6),
                    stacks4: beginDeck.slice(6,10),
                    stacks5: beginDeck.slice(10,15),
                    stacks6: beginDeck.slice(15, 21),
                    stacks7: beginDeck.slice(21,28),
                },
                mainDecks:{
                    stacks1: beginDeck.slice(28,52),
                    stacks2: []
                },
                finalStacks: {
                    stacks1: [],
                    stacks2: [],
                    stacks3: [],
                    stacks4: [],
                },
        }
}

export default Stacks()