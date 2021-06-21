import { useContext } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Planets() {
    const { store, actions } = useContext(AppContext);
    const { planets } = store;

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Planets</h1>
                <Cards objects={planets} getData={actions.getPlanets} view={"planets"}/>
                <br />
            </div>
        </div>
    );
}

export default Planets;