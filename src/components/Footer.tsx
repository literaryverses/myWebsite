import { Socials } from "./Types";

type FooterProps = {
    mySocials: Socials;
};

function Footer({mySocials}: FooterProps) {
    return (
        <>
        <footer id="footer">
            <section>
                <h3>Email</h3>
                <ul className="icons alt">
                    <li><a href="mailto:jrcarol33@gmail.com">jrcarol33@gmail.com</a></li>
                </ul>
            </section>
            <section>
                <h3>Socials</h3>
                <ul className="icons alt">
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
            </section>
        </footer>
        <div id="copyright">
            <ul><li>&copy; LiteraryVerses</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
        </div>
        </>
    )
}

export default Footer