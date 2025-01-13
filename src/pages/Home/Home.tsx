import styles from './Home.module.css';
import { QuoteGenerator } from '../../components/QuoteGenerator';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <div className={styles.main_page}>
                <div className={styles.text_container}>
                <QuoteGenerator />
                    <div className={styles.bottom_container}>
                        <Link to="talent">Show me more →</Link>
                    </div>
                </div>
                <img src="./src/assets/Shxtou.png" alt="Img" className={styles.image}/>
            </div>
        </div>
    );
}

export default Home;
