import {shuffle} from '../../../utils'


export const constroyDeck = () => {
    const aux = ['ouros', 'paus', 'espadas', 'copas'];
    const deckAux = [];
    for (let i=0; i < 4; i++) {
        for(let k = 1; k <=13; k++) {
          deckAux.push(
              {
                  number: k,
                  naipe: aux[i],
                  open: false,
              }
          );
        }
    }
    return shuffle(deckAux);
}

export const beginDeck  = constroyDeck();

