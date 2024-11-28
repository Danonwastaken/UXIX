import styles from './Talent.module.css';
import  { MemberCard } from '../../components/MemberCard';
import  { GenSwitch } from '../../components/GenSwitch';

const members = [
    { name: "Hakos Baelz", image: "src/assets/MembersIcons/Bae.png" },
    { name: "Gawr Gura", image: "src/assets/MembersIcons/Gura.png" },
    { name: "Nina Kosaka", image: "src/assets/MembersIcons/Nina.png" },
    { name: "Ike Eveland", image: "src/assets/MembersIcons/Ike.png" },
    { name: "Vox Akuma", image: "src/assets/MembersIcons/Vox.png" },
    { name: "Houshou Marine", image: "src/assets/MembersIcons/Marine.png" }
];

function Talent() {
    return (
        <div>
            <div className={styles.global_padding}>
                <div className ={styles.talent_main_head}>MEET OUR TALENT!</div>
                <div className={styles.talents}>
                    <GenSwitch/>
                </div>
                <div className={styles.talent_pos}> 
                    <div className={styles.talent_gapping}>
                        {members.map(member => (
                            <MemberCard name={member.name} image={member.image} social1="src/assets/SocialMediaIcons/twitch.png"  social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Talent;