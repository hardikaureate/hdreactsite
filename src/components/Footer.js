import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Footer = () => {
    return (
        <>
            <div id="wrapper">
                <footer id="footer">
                    <div className="inner">
                        <ul className="icons">
                            <li><a href="https://twitter.com/hardik171192" target="_blank" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.facebook.com/hardik.2626/" target="_blank" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href="https://www.instagram.com/hardikdevani/" target="_blank" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="https://github.com/hardikaureate" target="_blank" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href="https://in.linkedin.com/in/hardik-devani-4b9335b0" target="_blank" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© {(new Date().getFullYear())} Hardik Devani</li><li>Design: <a target="_blank" href="https://hardik2626.github.io/reactlive">HD's Developer</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
