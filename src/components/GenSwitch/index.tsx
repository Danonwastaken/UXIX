import styles from './GenSwitch.module.css';
import  { Button } from '../../components/Button';
import { useMatch, useNavigate } from 'react-router-dom';


export const GenSwitch = () => {
    const navigate = useNavigate();
    const isGrapeX = useMatch('/talent')
    const isGrapeMyth = useMatch('/merch')
    const isGrapeRu = useMatch('/merch')

    return (
        <div className={styles.switcher}>
        <div className={styles.button_container}>
            <Button
                label="GrapeX"
                onClick={() => navigate("/talent")} 
                size="large"
                variant={isGrapeX ? 'whiteoutlined' : 'text'}
            />
            <Button
                label="GrapeMyth"
                onClick={() => navigate("/merch")} 
                size="large"
                variant={isGrapeMyth ? 'whiteoutlined' : 'text'}
            />
            <Button
                label="GrapeRu"
                onClick={() => navigate("/merch")} 
                size="large"
                variant={isGrapeRu ? 'whiteoutlined' : 'text'}
            />
        </div>
    </div>
    );
};
