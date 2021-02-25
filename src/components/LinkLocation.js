// import styled from 'styled-components'

export default function LinkLocation(props){
    return (
        <div id={props.name}>
            <h3>{props.name}</h3>
            <p>
                {props.text}
            </p>
        </div>
    )
}

// const DocsInfo = styled.div`
//     width: 100%;
//     height:20rem;
//     background: grey;
// ` 