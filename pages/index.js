import Sun from "../components/sun";
import Planet from "../components/planet";

import mainStyle from './index.module.scss';

import MercuryStyle from "./utils/styles/planets/mercury.module.scss";
import VenusStyle from "./utils/styles/planets/venus.module.scss";
import EarthStyle from "./utils/styles/planets/earth.module.scss";
import MarsStyle from "./utils/styles/planets/mars.module.scss";
import JupiterStyle from "./utils/styles/planets/jupiter.module.scss";
import SaturnStyle from "./utils/styles/planets/saturn.module.scss";
import UranusStyle from "./utils/styles/planets/uranus.module.scss";

export default function Home() {
  const planets = [
    {
      name: "Mercury",
      style: MercuryStyle.Mercury,
    },
    {
      name: "Venus",
      style: VenusStyle.Venus,
    },
    {
      name: "Earth",
      style: EarthStyle.Earth,
    },
    {
      name: "Mars",
      style: MarsStyle.Mars,
    },
    {
      name: "Jupiter",
      style: JupiterStyle.Jupiter,
    },
    {
      name: "Saturn",
      style: SaturnStyle.Saturn,
    },
    {
      name: "Uranus",
      style: UranusStyle.Uranus,
    }
  ];

  return (
      <div className={mainStyle.main}>
        <div className={mainStyle.content}>
          <Sun />
          { planets.map((planet, index) =>
              <Planet key={ index } planet={ planet } />)
          }
        </div>
      </div>
  );
}
