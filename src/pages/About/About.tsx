import './About.css';
import  { FounderCard } from '../../components/FounderCard';
import  { DroppingList } from '../../components/DroppingList';
function About() {
    return (
        <div>
            <div className='about_main_head'>ABOUT US</div>
            <div className='descriptioncolumn'>VGrape Founderion is a Vtuber management group that consists of the talent groups.</div>
            <div className='descriptioncolumn'>Our mission is to help VTubers turn their passion into a profession through dedicated management, tech innovations, collaboration, and support.</div>
            <div className='about_others_head'>FOUNDERS</div>
            <div className='founders_gapping'> 
                <FounderCard title="Rappa" imageUrl1="src/assets/FoundersIcons/Founder1.png"  imageUrl2="src/assets/SocialMediaIcons/twitter.png" />
                <FounderCard title="Harry"  imageUrl1="src/assets/FoundersIcons/Founder2.png" imageUrl2="src/assets/SocialMediaIcons/twitter.png"/>
                <FounderCard title="Squirtle" imageUrl1="src/assets/FoundersIcons/Founder3.png" imageUrl2="src/assets/SocialMediaIcons/twitch.png"/>
            </div>
            <div className='about_others_head'>FAQ</div>
            <div className='faq_gapping'> 
                <DroppingList title="What's a VTuber?" subtitle="VTubers (Virtual YouTubers) are creators that use motion-captured avatars to create content."/>
                <DroppingList title="Can I create fanart and sell it?" subtitle="Yes"/>
                <DroppingList title="Is it possible to collaborate with Vitubers on advertising?" subtitle="Yes, we are considering cooperation with various companies. Write to us for more information!"/>
            </div>
            <div className='about_others_head'>HAVE A QUESTION?</div>
            <div className='description'>Contact us If you have any questions!</div>
            <div className='description'>vgrape@examplemail.com</div>
        </div>
    );
}

export default About;