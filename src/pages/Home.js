import axios from 'axios'
import { useState,useEffect } from 'react'
// import Sin from '../components/Sin'
import {Link} from 'react-router-dom'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import logo from '../images/7ds_logo.png'
import styled from 'styled-components'


export default function Home() {
    const [character,setCharacter] = useState('Meliodas')
    const [characterData, setCharacterData] = useState('')

    useEffect(()=>{
        axios.get(`https://seven-deadly-sins-api.herokuapp.com/characters/${character}`)
        .then(res=>{
            console.log(res.data)
            setCharacterData(res.data)
        })
    },[])
    console.log(characterData)
    return(
        <>
        <InitialLogo className="row m-0 d-flex flex-column align-items-center p-5">
            <img src={logo} alt="" width="70%"/>
            <p>The RESTful Seven Deadly Sins API</p>
        </InitialLogo>
        <div className="row m-0 d-flex flex-column text-center p-5">
            <p>All the Seven Deadly Sins data you'll ever need in one place, easily accessible through a modern RESTful API.</p>
            <Link to='/docs'>View the documentation</Link>
        </div>
        <div className="row m-0 d-flex flex-column text-center p-5">

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
                https://example.com/users/
            </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
            <InputGroup.Append>
            <Button variant="primary" onclick={setCharacter}>Submit</Button>
            </InputGroup.Append>
        </InputGroup>
        <div>
            <ul>
                {/* {characterData.map(el=>(<li>{el}</li>))} */}
            </ul>
        </div>
        </div>
            {/* <div className="row m-0">
                <Sin name="Meliodas"/>
                <Sin name="Ban"/>
                <Sin name="Merlin"/>
                <Sin name="King"/>
                <Sin name="Escanor"/>
                <Sin name="Diane"/>
                <Sin name="Gowther"/>
            </div> */}

            <div className="home-info">
                
            </div>

        </>
    )
}

const InitialLogo = styled.div`
    background: rgba(0,100,0);
`