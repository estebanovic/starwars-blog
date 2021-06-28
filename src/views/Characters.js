import { useContext, useEffect } from "react";
import Cards from "../components/Cards.js";
import { AppContext } from "../store/appContext.js";

function Characters() {
    const { store, actions } = useContext(AppContext);
    const { people } = store;

    useEffect(() => {
        return () => actions.getPeople(`https://www.swapi.tech/api/people/?page=1&limit=9`);
    },[])

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Characters</h1>
                <Cards objects={people} getData={actions.getPeople} setReadList={actions.setReadList} view={"people"} />
                <br />
            </div>
        </div>
    );
}

export default Characters;