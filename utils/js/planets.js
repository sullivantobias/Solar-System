import MercuryStyle from "../styles/planets/mercury.module.scss";
import VenusStyle from "../styles/planets/venus.module.scss";
import EarthStyle from "../styles/planets/earth.module.scss";
import MarsStyle from "../styles/planets/mars.module.scss";
import JupiterStyle from "../styles/planets/jupiter.module.scss";
import SaturnStyle from "../styles/planets/saturn.module.scss";
import UranusStyle from "../styles/planets/uranus.module.scss";
import NeptuneStyle from "../styles/planets/neptune.module.scss";

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
        children: <div className={SaturnStyle.Ring}/>
    },
    {
        name: "Uranus",
        style: UranusStyle.Uranus,
    },
    {
        name: "Neptune",
        style: NeptuneStyle.Neptune,
    }
];

export default planets;
