import { useContext, useEffect} from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Starships() {
    const { store, actions } = useContext(AppContext);
    const { starships } = store;

    useEffect(() => {
        return () => actions.getStarships(`https://www.swapi.tech/api/starships/?page=1&limit=9`);
    },[])

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Starships</h1>
                <Cards objects={starships} getData={actions.getStarships} setReadList={actions.setReadList} view={"starships"} />
                <br />
            </div>
        </div>
    );
}

export default Starships;