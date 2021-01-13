import axios from 'axios'
import { useState,useEffect } from 'react'
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
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
            <div className="container-fluid p-0">
                <img className="home-img" src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1570662725148-IAO6976RU4EBGLNZR3V3/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/seven_deadly_sins_wrath_gods-opening.jpg?format=2500w" alt=""/>
            </div>
            <div className="home-info">
                
            </div>

        </>
    )
}
//     async componentDidMount() {
//         if (this.state.character === '') return
//         axios.get(`${process.env.REACT_APP_SERVER_URL}/characters/${this.state.character}`)
//         .then(res=>{
//             this.setState({
//                 imgUrl:res.data.imgUrl,
//                 // race:res.data.race,
//                 // gender:res.data.gender,
//                 // birthday:res.data.imgUrl,
//                 // height:res.data.height,
//                 // weight:res.data.weight,
//                 // hairColor:res.data.hairColor,
//                 // eyeColor:res.data.eyeColor,
//                 // bloodType:res.data.bloodType
//             })
//         })
//     }

//     async componentDidUpdate(){
//         if (this.state.character === '') return
//         axios.get(`${process.env.REACT_APP_SERVER_URL}/characters/${this.state.character}`)
//         .then(res=>{
//             this.setState({
//                 imgUrl:res.data.imgUrl,
//                 // race:res.data.race,
//                 // gender:res.data.gender,
//                 // birthday:res.data.birthday,
//                 // height:res.data.height,
//                 // weight:res.data.weight,
//                 // hairColor:res.data.hairColor,
//                 // eyeColor:res.data.eyeColor,
//                 // bloodType:res.data.bloodType
//             })
//         })
//     }
    

//     render(){
//         return(
//             <div>
//                 <input value={this.state.character} onChange={(e)=>{this.setState({character: e.target.value})}}/>
//                 <br/>
//                 <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={this.state.imgUrl} />
//   <Card.Body>
//     <Card.Title>{this.state.character}</Card.Title>
//     {/* <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text> */}
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     {/* <ListGroupItem>{this.state.race}</ListGroupItem>
//     <ListGroupItem>{this.state.gender}</ListGroupItem>
//     <ListGroupItem>{this.state.birthday}</ListGroupItem>
//     <ListGroupItem>{this.state.height}</ListGroupItem>
//     <ListGroupItem>{this.state.weight}</ListGroupItem>
//     <ListGroupItem>{this.state.hairColor}</ListGroupItem>
//     <ListGroupItem>{this.state.eyeColor}</ListGroupItem>
//     <ListGroupItem>{this.state.bloodType}</ListGroupItem> */}
//   </ListGroup>
// </Card>
//             </div>
//         )
//     }
// }
