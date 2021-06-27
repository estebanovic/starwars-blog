import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext.js";

function Info(props) {
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        actions.getInfo('https://www.swapi.tech/api/' + props.match.params.type + '/' + props.match.params.id);
        return () => actions.clearInfo();
    }, [])

    return (
        <div className="container mb-5">
            <div className="row">
                {store.info !== null ?
                    <div>
                        <h1 className="mt-5">{store.info.properties.name}</h1> 
                        {store.info.properties.name ? <h3>Name: {store.info.properties.name}</h3> : ""}
                        {store.info.properties.mass ? <h3>Mass: {store.info.properties.mass}</h3> : ""}
                        {store.info.properties.birth_year ? <h3>Birth year: {store.info.properties.birth_year}</h3> : ""}
                        {store.info.properties.gender ? <h3>Gender: {store.info.properties.gender}</h3>  : ""}
                        {store.info.properties.hair_color ? <h3>Hair Color: {store.info.properties.hair_color}</h3> : ""}
                        {store.info.properties.skin_color ? <h3>Skin color: {store.info.properties.skin_color}</h3> : ""}
                        {store.info.properties.eye_color ? <h3>Eye color: {store.info.properties.eye_color}</h3> : ""}
                    </div>
                    :
                    <h1 className="text-center">Loading...</h1>
                }
            </div>
        </div>

    );
}

export default Info;