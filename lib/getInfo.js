import data from '/planets/planets.json';

export const getInfo = params => data.planets.find(planet => planet.id == params.id)

export const getIds = () => {
    const paths = data.planets.map(planet => ({
        params: { id: planet.id.toString() }
    }));

    return paths;
}
