import {CollectionCard} from "./CollectionCard/CollectionCard"

import {HeaderCollection, CollectionBox} from "./Collection.styled";


import danche from "../../assets/home/desktop/image-danche.png";
import granEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import planalto from "../../assets/home/desktop/image-planalto.png"


export const Collection = () => {
    return (
<CollectionBox>
    <HeaderCollection> our collection </HeaderCollection>
    <CollectionCard name="primary"
    image={granEspresso} 
    header="Gran Espresso" 
    text="Light and flavorful blend with cocoa and black pepper for an intense experience"/>
    <CollectionCard image={planalto} 
    header="Planalto" 
    text="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"/>
    <CollectionCard image={piccollo} 
    header="Piccollo" 
    text="Mild and smooth blend featuring notes of toasted almond and dried cherry "/>
    <CollectionCard image={danche} 
    header="Danche" 
    text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"/>
</CollectionBox>
    );
  };