import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
        box-sizing: border-box;
        margin: 0;
   } 

   body {
        width: 1200px;
        height: 2000px;
        margin: 0 auto;
   } 

   img {
        border: black solid 1px;
        display: inline-block;
        height: 220px;
        width: 155px;
        border-radius: 8px;
        padding: 2px;
    }
}
`