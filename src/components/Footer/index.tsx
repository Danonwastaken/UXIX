import styles from './Footer.module.css';
import { Link } from 'react-router-dom';



export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_links}>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="talent">Talent</Link>
                <Link to="news">Merch</Link>
            </div>
            <div className={styles.footer_icons}>
                <img src={"src/assets/SocialMediaIconsWhite/twitter.png"} alt={"twitter"}/>
                <img src={"src/assets/SocialMediaIconsWhite/twitch.png"} alt={"twitch"}/>
                <img src={"src/assets/SocialMediaIconsWhite/youtube.png"} alt={"youtube"}/>
                <img src={"src/assets/SocialMediaIconsWhite/tiktok.png"} alt={"tiktok"}/>
                <img src={"src/assets/SocialMediaIconsWhite/telegram.png"} alt={"telegram"}/>
            </div>
            <div className={styles.footer_copyright}>
                © 2024 VGrape, All rights served, vgrape@examplemail.com
            </div>
        </footer>
    );
};
