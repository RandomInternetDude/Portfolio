import styled from 'styled-components';





export const SectionContainer = styled.div`
display: flex;
flex-direction: wrap;
margin: .4em;

@media screen and (max-width: 786px) {
    display:inline;
    align-content:center;
}
`
export const aboutContext = styled.div`
margin:1.2em;
padding:1.2em;
align-items:center;
text-overflow:wrap;
`

export const Picture = styled.div`
position:relative;
align-items:center;
margin:1rem;
`
export const ChartContainer = styled.div`
align-items:center;
width:60%;
/* height:70%; */
margin:1.2em;

@media screen and (max-width: 786px) {
    display:inline;
    align-content:center;
    width:80%;
    height:100%;
}


`