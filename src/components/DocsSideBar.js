import { Card } from 'react-bootstrap'
import HashLink from './HashLink'

export default function DocsSideBar() {
    return (
        <Card fixed='top'>
            <HashLink part='Endpoints'/>
        </Card>
    )
}