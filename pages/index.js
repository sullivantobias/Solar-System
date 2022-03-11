import { useState } from "react";

import Link from 'next/link'

import planets from "../utils/js/planets";

import Sun from "../components/sun";
import Planet from "../components/planet";
import Title from "../components/title";

import mainStyle from './index.module.scss';

function Home() {
  const [planetName, setPlanetName] = useState('');

  const handlePlanetName = name => setPlanetName(name)

  return (
      <div className={mainStyle.Main}>
        <Title title={planetName} className={mainStyle.Title}/>
        <div className={mainStyle.Content}>
          <Sun />

          { planets.map((planet, index) =>
              <Link key={ index } href={`/solar-system/planets/${planet.name.toLowerCase()}`}>
                  <a>
                      <Planet onMouseLeave={ () => handlePlanetName('') }
                              onMouseEnter={ () => handlePlanetName(planet.name) }
                              planet={ planet }>
                          { planet.children }
                      </Planet>
                  </a>
              </Link>
          ) }
        </div>
      </div>
  );
}

export default Home;
