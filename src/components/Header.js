import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString('en-US', { hour12: true }));
        }, 1000);
    }, [time]);
    return (
        <div>
            <div id="wrapper">
                <header id="header" className="alt">
                    <div><Link to="/" className="logo"><strong>HD</strong> <span>by REACT</span></Link>{time}</div>
                    <div className="mainmenu  menu menu-3">
                        <ul className="links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </header>

                {/* <!-- Menu --> */}

                {/* <nav id="menu">
                    <ul className="links">
                        <li><Link to="index.html">Home</Link></li>
                        <li><Link to="landing.html">Landing</Link></li>
                        <li><Link to="generic.html">Generic</Link></li>
                        <li><Link to="elements.html">Elements</Link></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><Link to="#" className="button primary fit">Get Started</Link></li>
                        <li><Link to="#" className="button fit">Log In</Link></li>
                    </ul>
                </nav> */}
            </div></div>
    )
}

export default Header
