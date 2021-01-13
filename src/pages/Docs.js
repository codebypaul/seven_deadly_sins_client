import DocsSideBar from '../components/DocsSideBar'
import DocsBody from '../components/DocsBody'
import { Row,Col } from 'react-bootstrap'


export default function Docs() {
    return (
        <div>
            <Row className="p-3">
                <Col sm={4} sticky='top'>
                    <DocsSideBar/>
                </Col>
                <Col sm={8}>
                    <DocsBody/>
                </Col>
            </Row>
        </div>
    )
}