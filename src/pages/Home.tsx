import Header from '../components/Header';
import Button from '../components/Button';
import './Home.css';
function Home() {
    return (
        <div className='bg'>
            <h1>Welcome!</h1>
            <Header></Header>
            <img src="./src/Shxotou.png" alt="Img" className='image'
            />
        </div>
    );
}

export default Home;
