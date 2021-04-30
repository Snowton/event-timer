import React from 'react'
import { Link } from 'gatsby'

const Layout = ({children}) => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/app'>App</Link></li>
                </ul>
                
                {/* <Link to='/marketing'>Marketing</Link> */}
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout