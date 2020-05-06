import styled, {css} from 'styled-components'

function createCSS(length){
    let style=``
    let walk = 0
    for(let i = 1; i <= length; i++){
        style += `
        .card-${i} {
            position: relative;
             bottom: ${walk}px;
             &:hover {
                 border: gray 2px solid;
                 bottom: ${walk+15}px;
             }
        }`
        walk += 190
    }

    return css `${style}`

}
export default styled.div`
    display: inline-block;
    width: 1200px;
    height: 600px;
    text-align: center;
    margin-top: 12px;
    
    div {
        display: inline-block;
        width: 157px;
        height: 580px;
        vertical-align: top;
        margin-left: 14px;
        &:nth-child(1) {
            margin-left: -2px;
        }
    }
    
    ${props=>createCSS(props.theme.length)}
`