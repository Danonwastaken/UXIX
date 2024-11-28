import styles from './ProductCard.module.css';
import { useState } from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    ps: string;
    imageUrl: string;
    hoverImageUrl: string;
}

export const ProductCard = ({ title, price, ps, imageUrl, hoverImageUrl }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className={styles.productCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={isHovered? hoverImageUrl : imageUrl} alt={title} className={styles.productImage} />
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productPS}>{ps} </p>
            <p className={styles.productPrice}>{price} $</p>
        </div>
    );
};