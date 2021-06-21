import { useContext } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Starships() {
    const { store, actions } = useContext(AppContext);
    const { starships } = store;


    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Starships</h1>
                <Cards objects={starships} getData={actions.getStarships} view={"starships"} />
                <br />
            </div>
        </div>
    );
}

export default Starships;