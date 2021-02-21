import { Card } from 'react-bootstrap'
// import ReactMarkdown from 'react-markdown'
import LinkLocation from './LinkLocation'

export default function DocsBody() {
    // const markdown = ''
    return(
        <Card>
            <LinkLocation/>
            <LinkLocation name='Endpoints' text='some text about the endspoints'/>
        </Card>
    )
    
}