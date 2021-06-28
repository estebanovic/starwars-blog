import { useContext, useEffect } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Planets() {
    const { store, actions } = useContext(AppContext);
    const { planets } = store;

    useEffect(() => {
        return () => actions.getPlanets(`https://www.swapi.tech/api/planets/?page=1&limit=9`);
    },[])

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Planets</h1>
                <Cards objects={planets} getData={actions.getPlanets} setReadList={actions.setReadList} view={"planets"}/>
                <br />
            </div>
        </div>
    );
}

export default Planets;