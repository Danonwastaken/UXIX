import './Talent.css';
import  { MemberCard } from '../../components/MemberCard';
import  { GenSwitch } from '../../components/GenSwitch';
function Talent() {
    return (
        <div>
            <div className ='talent_main_head'>MEET OUR TALENT!</div>
            <div className='talents'>
                <GenSwitch/>
            </div>
            <div className='talent_pos'> 
                <div className='talent_gapping'>
                    <MemberCard name="Hakos Baelz" image="src/assets/MembersIcons/Bae.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png" />
                    <MemberCard name="Gawr Gura"  image="src/assets/MembersIcons/Gura.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                    <MemberCard name="Nina Kosaka" image="src/assets/MembersIcons/Nina.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                    <MemberCard name="Ike Eveland" image="src/assets/MembersIcons/Ike.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                    <MemberCard name="Vox Akuma" image="src/assets/MembersIcons/Vox.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                    <MemberCard name="Houshou Marine" image="src/assets/MembersIcons/Marine.png" social1="src/assets/SocialMediaIcons/twitch.png" social2="src/assets/SocialMediaIcons/twitter.png" social3="src/assets/SocialMediaIcons/youtube.png"/>
                </div>
            </div>
        </div>
    );
}

export default Talent;