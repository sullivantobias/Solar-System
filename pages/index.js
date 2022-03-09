import { useState } from "react";

import Router, { withRouter } from 'next/router'

import planets from "../utils/js/planets";

import Sun from "../components/sun";
import Planet from "../components/planet";
import Title from "../components/title";

import mainStyle from './index.module.scss';

function Home() {
  const [planetName, setPlanetName] = useState('');

  const handlePlanetName = name => setPlanetName(name)
  const handlePlanetClick = name => {
      Router.push(`solar-system/planets/${name.toLowerCase()}`)
  }

  return (
      <div className={mainStyle.Main}>
        <Title title={planetName} className={mainStyle.Title}/>
        <div className={mainStyle.Content}>
          <Sun />
          { planets.map((planet, index) =>
              <Planet onClick={ () => handlePlanetClick(planet.name)}
                      onMouseLeave={ () => handlePlanetName('') }
                      onMouseEnter={ () => handlePlanetName(planet.name) }
                      key={ index }
                      planet={ planet }>
                  { planet.children }
              </Planet>
          ) }
        </div>
      </div>
  );
}

export default withRouter(Home);
