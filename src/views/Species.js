import { useContext, useEffect } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Species() {
    const { store, actions } = useContext(AppContext);
    const { species } = store;

    useEffect(() => {
        return () => actions.getSpecies(`https://www.swapi.tech/api/species/?page=1&limit=9`);
    },[])

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Species</h1>
                <Cards objects={species} getData={actions.getSpecies} setReadList={actions.setReadList} view={"species"}/>
                <br />
            </div>
        </div>
    );
}

export default Species;