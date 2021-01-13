import {HashLink as Link } from 'react-router-hash-link'
import { Button } from 'react-bootstrap'

export default function HashLink(props) {
    return (
        <Link to={`/docs#${props.part}`}>
        <Button className="w-100" variant='light'>{props.part}</Button>
        </Link>
    )
}