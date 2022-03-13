import { getIds, getInfo } from "../../lib/getInfo";

import planets from "../../utils/js/planets";

import Layout from "../../components/layout/layout";
import Planet from "../../components/planet";
import Title from "../../components/title";
import Text from "../../components/text";
import Card from "../../components/card/card";

import style from './planet.module.scss'

export async function getStaticProps({ params }) {
    const planetData = getInfo(params);

    return {
        props: {
            planetData
        }
    }
}

export async function getStaticPaths() {
    const paths = getIds();

    return {
        paths,
        fallback: false
    };
}

export default function PlanetInfo({ planetData }) {
    const currentPlanet = planets.find(planet => planet.id === planetData.id);
    const {
        name,
        desc,
        rotation,
        radius,
        average_temperature,
        revolution
    } = planetData;

    const infos = [
        { 'Revolution': `${revolution} days` },
        { 'Rotation': `${rotation} days` },
        { 'Radius': `${radius} km` },
        { 'AVERAGE TEMP': `${average_temperature} °C` }
    ];

    return <div className={style.PlanetLayout}>
        <Layout>
            <Planet addStyle={style.PlanetDetails} planet={currentPlanet} />
        </Layout>
        <div className={style.Desc}>
            <Layout key='title' delay={0.1}>
                <Title title={name} />
            </Layout>
            <Layout key='desc' delay={0.2}>
                <Text>{ desc }</Text>
            </Layout>
        </div>
        <div className={style.Cards}>
            {
                infos.map((info, index) =>
                    <Layout key={ index } delay={ 0.3 + index / 10 }>
                        <Card info={ info } />
                    </Layout>

                )
            }
        </div>
    </div>
}
