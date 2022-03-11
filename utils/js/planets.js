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
        id: "mercury",
        name: "Mercury",
        style: MercuryStyle.Mercury,
    },
    {
        id: "venus",
        name: "Venus",
        style: VenusStyle.Venus,
    },
    {
        id: "earth",
        name: "Earth",
        style: EarthStyle.Earth,
    },
    {
        id: "mars",
        name: "Mars",
        style: MarsStyle.Mars,
    },
    {
        id: "jupiter",
        name: "Jupiter",
        style: JupiterStyle.Jupiter,
    },
    {
        id: "saturn",
        name: "Saturn",
        style: SaturnStyle.Saturn,
        children: <div className={SaturnStyle.Ring}/>
    },
    {
        id: "uranus",
        name: "Uranus",
        style: UranusStyle.Uranus,
    },
    {
        id: "neptune",
        name: "Neptune",
        style: NeptuneStyle.Neptune,
    }
];

export default planets;
