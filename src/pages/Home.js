import Axios from 'axios'
import React, { Component } from 'react';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            character: 'Gowther',
            characterData: '',
            
        }
    }
    async componentDidMount(){
        if (this.state.character === '') return
        Axios.get(`https://seven-deadly-sins-api.herokuapp.com/characters/${this.state.character}`).then(res=>this.setState({pokeImg:res.data.imgUrl}))
    }
    async componentDidUpdate() {
        if (this.state.character === '') return
        Axios.get(`https://seven-deadly-sins-api.herokuapp.com/characters/${this.state.character}`).then(res=>
        console.log(res.data))
        // this.setState({pokeImg:res.data.imgUrl})
    }
    render(){
        console.log();
        return(
            <div>
                <input value={this.state.character} onChange={(e)=>{this.setState({character: e.target.value.toLowerCase()})}}/>
                <br/>
                <img src={this.state.pokeImg} alt='pokemon'/>
            </div>
        )
    }
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
