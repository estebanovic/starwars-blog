import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext.js";

function Info(props) {
    const { store, actions } = useContext(AppContext);

    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    }

    useEffect(() => {
        actions.getInfo('https://www.swapi.tech/api/' + props.match.params.type + '/' + props.match.params.id);
        return () => actions.clearInfo();
    }, [])

    return (
        <div className="container mb-5">
            <div className="row">
                {store.info !== null ?
                    <div>
                        <div className="col-6 m-0">
                            <h1 className="mt-5">{store.info.properties.name}</h1>
                            <br />
                            {store.info.properties.birth_year ? <h3>Birth year: {store.info.properties.birth_year}</h3> : ""}
                            {store.info.properties.gender ? <h3>Gender: {store.info.properties.gender}</h3> : ""}
                            {store.info.properties.hair_color ? <h3>Hair Color: {store.info.properties.hair_color}</h3> : ""}
                            {store.info.properties.skin_color ? <h3>Skin color: {store.info.properties.skin_color}</h3> : ""}
                            {store.info.properties.eye_color ? <h3>Eye color: {store.info.properties.eye_color}</h3> : ""}
                            {store.info.properties.mass ? <h3>Mass: {store.info.properties.mass}</h3> : ""}
                            {store.info.properties.manufacturer ? <h3>Manufacturer: {store.info.properties.manufacturer}</h3> : ""}
                            {store.info.properties.length ? <h3>Length: {store.info.properties.length}</h3> : ""}
                            {store.info.properties.passengers ? <h3>Passengers: {store.info.properties.passengers}</h3> : ""}
                            {store.info.properties.MGLT ? <h3>Speed(mglt): {store.info.properties.MGLT}</h3> : ""}
                            {store.info.properties.max_atmosphering_speed ? <h3>Max atmosphering speed: {store.info.properties.max_atmosphering_speed}</h3> : ""}
                            {store.info.properties.cargo_capacity ? <h3>Cargo capacity: {store.info.properties.cargo_capacity}</h3> : ""}
                            {store.info.properties.consumables ? <h3>Consumables: {store.info.properties.consumables}</h3> : ""}
                            {store.info.properties.cost_in_credits ? <h3>Price: {store.info.properties.cost_in_credits}</h3> : ""}
                            {store.info.properties.climate ? <h3>Climate: {store.info.properties.climate}</h3> : ""}
                            {store.info.properties.terrain ? <h3>Terrain: {store.info.properties.terrain}</h3> : ""}
                            {store.info.properties.diameter ? <h3>Diameter: {store.info.properties.diameter}</h3> : ""}
                            {store.info.properties.rotation_period ? <h3>Rotation period: {store.info.properties.rotation_period}</h3> : ""}
                            {store.info.properties.orbital_period ? <h3>Orbital period: {store.info.properties.orbital_period}</h3> : ""}
                            {store.info.properties.gravity ? <h3>Gravity: {store.info.properties.gravity}</h3> : ""}
                            {store.info.properties.surface_water ? <h3>Surface water: {store.info.properties.surface_water}</h3> : ""}
                            {store.info.properties.classification ? <h3>Classification: {store.info.properties.classification}</h3> : ""}
                            {store.info.properties.designation ? <h3>Designation: {store.info.properties.designation}</h3> : ""}
                            {store.info.properties.average_height ? <h3>Average height: {store.info.properties.average_height}</h3> : ""}
                            {store.info.properties.average_lifespan ? <h3>Average lifespan: {store.info.properties.average_lifespan}</h3> : ""}
                            {store.info.properties.skin_colors ? <h3>Skin color: {store.info.properties.skin_colors}</h3> : ""}
                            {store.info.properties.hair_colors ? <h3>Hair colors: {store.info.properties.hair_colors}</h3> : ""}
                            {store.info.properties.eye_colors ? <h3>Eye color: {store.info.properties.eye_colors}</h3> : ""}
                            {store.info.properties.language ? <h3>Languaje: {store.info.properties.language}</h3> : ""}
                        </div>
                    </div>
                    :
                    <h1 className="text-center mt-5">Loading...</h1>
                }
            </div>
        </div>

    );
}

export default Info;