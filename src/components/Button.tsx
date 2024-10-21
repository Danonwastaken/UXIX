import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    color?: string;
    size?: string;
    variant?: 'outlined' | 'text';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, size , variant}) => {
    return (
        <button
            className={`btn btn-${variant} btn-${color} btn-${size}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;