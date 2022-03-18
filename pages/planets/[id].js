import { useState } from "react";
import classNames from "classnames";

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
    const [ descId, setDescId ] = useState('overview');

    const currentPlanet = planets.find(planet => planet.id === planetData.id);
    const {
        name,
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

    const tabs = [
        {
            title: 'Overview',
            id: 'overview',
        },
        {
            title: 'Internal',
            id: 'internal',
        },
        {
            title: 'Surface',
            id: 'surface',
        },
    ];

    const desc = planetData[descId];

    return <div className={style.PlanetLayout}>
        <Layout className={style.Tabs}>
            { tabs.map(({ title, id }, index) =>
                <button onClick={() => setDescId(id)} key={index} className={classNames(style.Tab, {
                    [style.isCurrent]: descId === id
                })}>{title}</button>
            ) }
        </Layout>
        <Layout>
            <Planet addStyle={style.PlanetDetails} planet={currentPlanet} />
        </Layout>
        <div className={style.Desc}>
            <Layout key='title' delay={0.1}>
                <Title title={name} />
            </Layout>
            <Layout key='desc' delay={ 0.2 }>
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
