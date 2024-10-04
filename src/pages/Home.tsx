
import Button from '../components/Button';

function Home() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Button
                label="About"
                onClick={() => window.open("http://localhost:5173/about")} 
                color="purple"
                size="large"
            />
        </div>
    );
}

export default Home;
