import { Link } from "react-router"
import { Socials } from "./Types"

type NavProps = {
    mySocials: Socials;
    currPath: String
};  


function NavBar({mySocials, currPath}: NavProps) {
    return(
        <nav id="nav">
            <ul className="links">
                <li className={currPath === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                </li>
                <li className={currPath === '/projects' ? 'active' : ''}>
                    <Link to="/projects">Software</Link>
                </li>
                <li className={currPath === '/blog' ? 'active' : ''}>
                    <Link to="/blog">Writing</Link>
                </li>
                <li>
                    <Link to="https://docs.google.com/document/d/1zm-OfQVMPlOHLiPrOa5dV4B50H4PQ3lI/edit?usp=sharing&ouid=116599078357656932597&rtpof=true&sd=true">Resume</Link>
                </li>
            </ul>
            
            <ul className="icons">
            {Object.entries(mySocials).map(([platform, url]) => (
                <li key={platform}>
                    <a
                        href={url}
                        className={`icon brands fa-${platform.toLowerCase()}`}
                    >
                        <span className="label">{platform}</span>
                    </a>
                </li>
            ))}
            </ul>
        </nav>

        
    )
}

export default NavBar