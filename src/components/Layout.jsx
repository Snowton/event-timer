import React from 'react'
import { Link } from 'gatsby'
import "./Layout.css"

const Layout = ({children}) => {
    return (
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway&display=swap" rel="stylesheet" />
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/app'>App</Link></li>
                </ul>
                
                {/* <Link to='/marketing'>Marketing</Link> */}
            </nav>
            <div className="spacing"></div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout