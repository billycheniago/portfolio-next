import Hero from "./Hero";
import Challenge from "./Challenge";
import Users from "./Users";
import Approach from "./Approach";
import Solution from "./Solution";
import Booking from "./Booking";
import OnSite from "./OnSite";
import DashboardSection from "./DashboardSection";
import Decisions from "./Decisions";
import Testing from "./Testing";
import Outcomes from "./Outcomes";
import Lessons from "./Lessons";
import { LightboxProvider } from "../ams/Lightbox";
import { zoomItems } from "../zoomItems";
import { assets } from "./assets";

// Banner outcome-* tampil tanpa zoom, jadi tidak ikut di lightbox.
const items = zoomItems(assets, { exclude: (n) => n.startsWith("outcome-") });

export default function FurtunaCaseStudy() {
  return (
    <LightboxProvider items={items}>
      <Hero />
      <Challenge />
      <Users />
      <Approach />
      <Solution />
      <Booking />
      <OnSite />
      <DashboardSection />
      <Decisions />
      <Testing />
      <Outcomes />
      <Lessons />
    </LightboxProvider>
  );
}
