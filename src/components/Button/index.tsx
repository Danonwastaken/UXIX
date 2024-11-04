import styles from './Button.module.css';
interface ButtonProps {
    label: string;
    onClick: () => void;
    size?: string;
    variant?: 'outlined' | 'text';
}

export const Button = ({ label, onClick, size, variant}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[`button_${variant}`]} ${styles[`button_${size}`]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}