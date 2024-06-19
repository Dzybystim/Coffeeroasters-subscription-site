import {ChooseBox, 
    ChooseColorBox, 
    ChooseHeaderBox, 
    ChooseHeader,
    ChooseText,
    ChooseList} from "./Choose.styled";

import {ChooseCard} from "./ChooseCard/ChooseCard"

import coffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg"

export const Choose = () => {
    return (
  <ChooseBox>
    <ChooseColorBox/>
    <ChooseHeaderBox>
    <ChooseHeader>Why choose us?</ChooseHeader>
    <ChooseText>A large part of our role is choosing which particular 
        coffees will be featured  in our range. 
        This means working closely with the best coffee growers 
        to give you a more impactful experience on every level.</ChooseText>
    </ChooseHeaderBox>
    <ChooseList>
        <ChooseCard 
        image={coffeeBean} 
        header="Best quality"
        text="Discover an endless variety of the world’s 
        best artisan coffee from each of our roasters."/>
        <ChooseCard 
        image={gift}
        header="Exclusive benefits"
        text="Special offers and swag when you subscribe, 
        including 30% off your first shipment."/>
        <ChooseCard 
        image={truck}
        header="Free shipping"
        text="We cover the cost and coffee is delivered 
        fast. Peak freshness: guaranteed."/>
    </ChooseList>
  </ChooseBox>
    );
}