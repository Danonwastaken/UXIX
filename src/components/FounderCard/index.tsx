import styles from './FounderCard.module.css';
interface FounderCardProps {
    title: string;
    imageUrl1: string;
    imageUrl2: string;
}
export const FounderCard = ({ title,  imageUrl1, imageUrl2 }: FounderCardProps) => {
    return (
        <div className={styles.founderCard}>
            <img src={imageUrl1} alt={title} className={styles.founderImage} />
            <div className={styles.founderTitle}>{title}</div>
            <img src={imageUrl2} alt={title} className={styles.founderSocialMedia} />
        </div>
    );
};