import {Hero} from "../../components/Hero/Hero";
import {Collection} from "../../components/Collection/Collection";
import {Choose} from "../../components/Choose/Choose"
import {Works} from "../../components/Works/Works"
import {Footer} from "../../components/Footer/Footer"

export const Home = () => {
  return (
    <>
      <Hero/>
      <Collection/>
      <Choose/>
      <Works/>
      <Footer/>
    </>
  );
}