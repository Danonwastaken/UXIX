import { useState } from 'react';
import styles from './DroppingList.module.css';

interface DroppingListProps {
    title: string;
    subtitle: string;
}

export const DroppingList = ({ title,  subtitle }: DroppingListProps) => {    
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className={styles.droppinglistmodule}>
            <div className={styles.droppinglistheader}>
                <h2>{title}</h2>
                </div>
                <button onClick={toggleContent} className={styles.droppinglistbutton}>
                    {isOpen ? '✖' : '☰'}
                </button>
            <div className={`${styles.droppinglistcontent} ${isOpen ? styles.open : ''}`}>
                        <p>{subtitle}</p>
            </div>
        </div>
    );
};
