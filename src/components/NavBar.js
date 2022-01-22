import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavBar() {
    return (
        <div className="navBar">
            <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link href="/">
                            <Link to="/" className='links'>Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"aboutPage"}>
                            <Link to="/about" className='links'>About Us</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey={"packagesPage"}>
                            <Link to="/packages" className='links'>Our Packages</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}

export default NavBar