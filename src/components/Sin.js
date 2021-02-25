import styled from 'styled-components'

export default function Sin(props) {
    return (
        <SinWrapper onClick={()=>{
            props.name = 'different'
        }}>
            {props.name}
        </SinWrapper>
    )
}

const SinWrapper = styled.div`
    border: .25rem solid black;
    width: 100%;
    cursor: pointer;
`
