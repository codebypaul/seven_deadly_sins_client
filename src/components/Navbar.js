import logo from '../images/7ds_img_logo.PNG'
// import Axios from 'axios'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation(props) {
  return(
    <Navbar bg="light" expand="lg" sticky='top'>
      <Navbar.Brand href="/" className='deutsch'>
        <img src={logo} alt="" width="45rem"/>API
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/docs'>Documentation</Nav.Link>
            {/* <div className='d-flex'>
          {props.isAuth ?
            <div>
         
            <Nav.Link href='/profile'>Profile</Nav.Link>
              <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>

            </div>
            
            :
            <div>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
              <Nav.Link href='/Login'>Login</Nav.Link>

            </div>
          }
          </div> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  )
}