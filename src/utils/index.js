import verso from '../assets/cards/verso.jpg'
import fundoCard from '../assets/cards/fundoCard.png';

export function shuffle(array) {
    let m = array.length, t, i;
  
    // As long as there are elements, to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  export function importAll(r) {
      return r.keys().map(r);
    }
    
   export const cardsImages = {
      copas:  importAll(require.context('../assets/cards/copas/', false, /\.(png|jpe?g|svg)$/)),
      ouros: importAll(require.context('../assets/cards/ouros/', false, /\.(png|jpe?g|svg)$/)),
      paus: importAll(require.context('../assets/cards/paus/', false, /\.(png|jpe?g|svg)$/)),
      espadas: importAll(require.context('../assets/cards/espadas/', false, /\.(png|jpe?g|svg)$/)),
      verso,
      fundoCard
  }

 export const printCard = (memory) =>{
    if(!memory){
      return cardsImages.fundoCard
    }
    if(memory === 'verso'){
      return cardsImages.verso
    }
    const {naipe, number} = memory
    return cardsImages[naipe][number-1]
  }