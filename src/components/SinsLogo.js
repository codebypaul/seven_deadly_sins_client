import styled from 'styled-components'
import logo from '../images/7ds_logo.png'

export default function SinsLogo() {
    return (
        <LogoCont>
            <img src={logo} alt="" width="70%" className='logo'/>
            <span className='deutsch api'>API</span>
        </LogoCont>
    )
}

const LogoCont = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    .logo {
        z-index: 1;
        opacity: .75;
    }
    .api {
        position: absolute;
        top: 4rem;
        font-size: 12rem;
    }
`