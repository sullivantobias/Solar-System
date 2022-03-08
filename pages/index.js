import { useState } from "react";

import planets from "./utils/js/planets";

import Sun from "../components/sun";
import Planet from "../components/planet";
import Title from "../components/title";

import mainStyle from './index.module.scss';

export default function Home() {
  const [planetName, setPlanetName] = useState('')

  return (
      <div className={mainStyle.Main}>
        <Title title={planetName} className={mainStyle.Title}/>
        <div className={mainStyle.Content}>
          <Sun />
          { planets.map((planet, index) =>
              <Planet onMouseLeave={value => setPlanetName(value)}
                      onMouseEnter={value => setPlanetName(value)}
                      key={ index }
                      planet={ planet }>
                { planet.children }
              </Planet>
          ) }
        </div>
      </div>
  );
}
