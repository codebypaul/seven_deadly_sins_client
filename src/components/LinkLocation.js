import styled from 'styled-components'

export default function LinkLocation(props){
    return (
        <DocsInfo id={props.name}>
            <h1>{props.name}</h1>
            {props.text}
        </DocsInfo>
    )
}

const DocsInfo = styled.div`
    width: 100%;
    height:20rem;
    background: grey;
` 