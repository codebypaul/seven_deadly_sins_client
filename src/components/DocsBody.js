// import ReactMarkdown from 'react-markdown'
import LinkLocation from './LinkLocation'

export default function DocsBody() {
    // const markdown = ''
    const info = 'This is a consumption-only API - only the HTTP GET method is available on resources.\n No authentication is requires to access this API, and all resources are fully open and available. We request that you limit your requests to reduce our hosting costs.'
    return(
        <div className="container">
            <LinkLocation name='Information' text={info}/>
            <LinkLocation name='Fair Use Policy'/>
            <br/>
            <LinkLocation name='Characters'/>
            <LinkLocation name='Orders'/>
            <LinkLocation name='Weapons'/>
            <LinkLocation name='Abilities'/>
        </div>
    )
}