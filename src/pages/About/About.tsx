import styles from './About.module.css';
import  { FounderCard } from '../../components/FounderCard';
import  { DroppingList } from '../../components/DroppingList';

const founders = [
    { title: "Rappa", imageUrl1: "src/assets/FoundersIcons/Founder1.png", imageUrl2: "src/assets/SocialMediaIcons/twitter.png"},
    { title: "Harry", imageUrl1: "src/assets/FoundersIcons/Founder2.png", imageUrl2: "src/assets/SocialMediaIcons/twitter.png"},
    { title: "Squirtle", imageUrl1: "src/assets/FoundersIcons/Founder3.png", imageUrl2: "src/assets/SocialMediaIcons/twitch.png"}
];

const listTitle = [
    {title: "What's a VTuber?", subtitle: "VTubers (Virtual YouTubers) are creators that use motion-captured avatars to create content."},
    {title: "Can I create fanart and sell it?", subtitle: "Yes"},
    {title: "Is it possible to collaborate with Vitubers on advertising?", subtitle: "Yes, we are considering cooperation with various companies. Write to us for more information!"}
];

function About() {
    return (
        <div>
            <div className={styles.global_padding}>
                <div className={styles.about_main_head}>ABOUT US</div>
                <div className={styles.descriptioncolumn}>VGrape Founderion is a Vtuber management group that consists of the talent groups.</div>
                <div className={styles.descriptioncolumn}>Our mission is to help VTubers turn their passion into a profession through dedicated management, tech innovations, collaboration, and support.</div>
                <div className={styles.about_others_head}>FOUNDERS</div>
                <div className={styles.founders_gapping}> 
                    {founders.map(founder => (
                    <FounderCard title={founder.title} imageUrl1={founder.imageUrl1}  imageUrl2={founder.imageUrl2} />
                    ))}
                </div>
                <div className={styles.about_others_head}>FAQ</div>
                <div className={styles.abouted}>
                    <div className={styles.faq_gapping}> 
                        {listTitle.map(listT => (
                        <DroppingList title={listT.title} subtitle={listT.subtitle}/>
                        ))}
                    </div>
                </div>
                <div className={styles.about_others_head}>HAVE A QUESTION?</div>
                <div className={styles.description}>Contact us If you have any questions!</div>
                <div className={styles.description}>vgrape@examplemail.com</div>
            </div>
        </div>
    );
}

export default About;