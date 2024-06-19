import {WorksBoxStyled,
        WorksHeader,
        WorksList,
        WorksButtonBox
} from "./Works.styled"
import {Button} from "../Button/Button"
import {WorksCard} from "../Works/WorksCard/WorksCard"

export const Works = () => {
    return (
    <WorksBoxStyled>
        <WorksHeader>How it works</WorksHeader>
        <WorksList>
            <WorksCard number="01" 
            header="Pick your coffee" 
            text="Select from our evolving range of artisan coffees. 
            Our beans are ethically sourced and we pay fair prices for them. 
            There are new coffees in all profiles every month for you to try out."/>
            <WorksCard number="02" 
            header="Choose the frequency" 
            text="Customize your order frequency, quantity, even your roast style and grind type. 
            Pause, skip or cancel your subscription with no commitment through our online portal."/>
            <WorksCard number="03" 
            header="Receive and enjoy!" 
            text="We ship your package within 48 hours, freshly roasted. 
            Sit back and enjoy award-winning 
            world-class coffees curated to provide a distinct tasting experience."/>
        </WorksList>
        <WorksButtonBox>
        <Button href="#">Create your plan</Button>
        </WorksButtonBox>
    </WorksBoxStyled>
    );
  };