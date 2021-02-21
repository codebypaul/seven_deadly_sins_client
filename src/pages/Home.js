import axios from 'axios'
import { useState,useEffect } from 'react'
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Sin from '../components/Sin'
import {Link} from 'react-router-dom'
import {InputGroup, FormControl, Button} from 'react-bootstrap'

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
    return(
        <>
        <div className="row m-0 d-flex flex-column text-center p-5">
            <h1>
                Seven Deadly Sins api
            </h1>
            <p>The RESTful Seven Deadly Sins API</p>
        </div>
        <div className="row m-0 d-flex flex-column text-center p-5">
            <p>All the Seven Deadly Sins data you'll ever need in one place, easily accessible through a modern RESTful API.</p>
            <Link to='/docs'>View the documentation</Link>
        </div>
        <div className="row m-0 d-flex flex-column text-center p-5">
        <form action="">
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>

        </form>
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
            {/* <div className="container-fluid p-0">
                <img className="home-img" src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1570662725148-IAO6976RU4EBGLNZR3V3/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/seven_deadly_sins_wrath_gods-opening.jpg?format=2500w" alt=""/>
            </div> */}
            <div className="home-info">
                
            </div>

        </>
    )
}