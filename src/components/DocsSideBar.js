import { Card } from 'react-bootstrap'
import HashLink from './HashLink'

export default function DocsSideBar() {
    return (
        <Card fixed='top'>
            <HashLink part='Information'/>
            <HashLink part='Fair Use Policy'/>
            <hr/>
            <HashLink part='Characters'/>
            <HashLink part='Orders'/>
            <HashLink part='Weapons'/>
            <HashLink part='Abilities'/>
            <hr/>
            
        </Card>
    )
}