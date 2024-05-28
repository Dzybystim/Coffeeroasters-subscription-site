import heroImage from "../../assets/home/mobile/image-hero-coffeepress.jpg"
import {Button} from "../Button/Button"
import {HeroImageBox, 
        HeroBox, 
        HeroImage,
        HeroTextBox,
        HeroHeader,
        HeroText,
        HeroButtonBox} from "../Hero/Hero.styled"


export const Hero = () => {
    return (
     <HeroBox>
        <HeroImageBox>
        <HeroImage src={heroImage} alt="coffeepress"/>
        </HeroImageBox>
        <HeroTextBox>
            <HeroHeader>Great coffee made simple.</HeroHeader>
            <HeroText>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
            coffees from our best roasters delivered directly to your door, at your schedule.</HeroText>
            <HeroButtonBox>
            <Button href="#">Create your plan</Button>
            </HeroButtonBox>
        </HeroTextBox>
     </HeroBox>
    );
  };