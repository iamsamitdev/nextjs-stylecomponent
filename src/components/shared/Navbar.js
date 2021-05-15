import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    background-color: #000;
    height: 80px;
    color: #fff;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const SyledLink = styled.a`
    font-weight:bold;
    padding: 0 2rem;
    text-transform: uppercase;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/'>
                    <SyledLink>Next App</SyledLink>
                </Link>
            </div>
            <div>
                <Link href='/' passHref>
                    <SyledLink>Home</SyledLink>
                </Link>
                <Link href='/about' passHref>
                    <SyledLink>About</SyledLink>
                </Link>
                <Link href='/contact' passHref>
                    <SyledLink>Contact</SyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
