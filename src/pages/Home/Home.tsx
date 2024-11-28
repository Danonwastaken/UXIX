import styles from './Home.module.css';
import { QuoteGenerator } from '../../components/QuoteGenerator';

function Home() {

    return (
        <div>
            <img src="./src/assets/Shxtou.png" alt="Img" className={styles.image}/>
            <div className={styles.text_container}>
              <QuoteGenerator />
                <div className={styles.bottom_container}>
                    <a href="talent">Show me more →</a>
                </div>
           </div>
        </div>

    );
}

export default Home;
