import {shuffle} from '../../../utils'
import verso from '../../../assets/cards/verso.jpg';
import fundoCard from '../../../assets/cards/fundoCard.png';
function importAll(r) {
    return r.keys().map(r);
  }
console.log(fundoCard)
 export const cardsImages = {
    copas:  importAll(require.context('../../../assets/cards/copas/', false, /\.(png|jpe?g|svg)$/)),
    ouros: importAll(require.context('../../../assets/cards/ouros/', false, /\.(png|jpe?g|svg)$/)),
    paus: importAll(require.context('../../../assets/cards/paus/', false, /\.(png|jpe?g|svg)$/)),
    espadas: importAll(require.context('../../../assets/cards/espadas/', false, /\.(png|jpe?g|svg)$/)),
    verso,
    fundoCard
}

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

