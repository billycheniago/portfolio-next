import Hero from "./Hero";
import Challenge from "./Challenge";
import Users from "./Users";
import Approach from "./Approach";
import DesignSystem from "./DesignSystem";
import HiFi from "./HiFi";
import Solution from "./Solution";
import Decisions from "./Decisions";
import Outcome from "./Outcome";
import Lessons from "./Lessons";
import { LightboxProvider } from "../ams/Lightbox";
import { zoomItems } from "../zoomItems";
import { assets } from "./assets";

const items = zoomItems(assets);

export default function CikarangCaseStudy() {
  return (
    <LightboxProvider items={items}>
      <Hero />
      <Challenge />
      <Users />
      <Approach />
      <DesignSystem />
      <HiFi />
      <Solution />
      <Decisions />
      <Outcome />
      <Lessons />
    </LightboxProvider>
  );
}
