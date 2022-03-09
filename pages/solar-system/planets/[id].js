import { getIds, getInfo } from "../../../lib/getInfo";

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
    return planetData.id
}
