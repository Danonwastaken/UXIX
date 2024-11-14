
import styles from './MemberCard.module.css';

interface MemberCardProps {
    name: string;
    image: string;
    social1: string;
    social2: string;
    social3: string;
    
}

export const MemberCard = ({ name, image, social1, social2, social3}: MemberCardProps) => {
    return (
        <div className={styles.MemberCardd}>
            <div className={styles.MemberSocialMedia}>
                <img src={social1} className={styles.MemberIcon} />
                <img src={social2} className={styles.MemberIcon} />
                <img src={social3} className={styles.MemberIcon} />
            </div>
            <div className={styles.MemberCard}>
                <div className={styles.MemberCircle}>
                    <img src={image} alt={name} className={styles.MemberCircleImg}/>
                </div>
                <div className={styles.MemberTitle}>{name}</div>
            </div>
        </div>
    );
};
