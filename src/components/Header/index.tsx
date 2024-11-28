
import styles from './Header.module.css';
import  { Button } from '../../components/Button';
import { useMatch, useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();
    const isAbout = useMatch('/about')
    const isMain = useMatch('/')
    const isTalent = useMatch('/talent')
    const isMerch = useMatch('/merch')
    
    return (
        <header className={styles.header}>
            <img src="./src/assets/LOGO.png" alt="Logo" className={styles.logo} />
            <div className={styles.button_container}>
                <Button
                    label="Home"
                    onClick={() => navigate("/")} 
                    size="large"
                    variant={isMain ? 'outlined' : 'text'}
                />
                <Button
                    label="About"
                    onClick={() => navigate("/about")} 
                    size="large"
                    variant={isAbout ? 'outlined' : 'text'}
                />
                <Button
                    label="Talent"
                    onClick={() => navigate("/talent")} 
                    size="large"
                    variant={isTalent ? 'outlined' : 'text'}
                />
                <Button
                    label="Merch"
                    onClick={() => navigate("/merch")} 
                    size="large"
                    variant={isMerch ? 'outlined' : 'text'}
                />
            </div>
        </header>
    );
};
