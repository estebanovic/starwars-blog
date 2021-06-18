import { useContext } from "react";
import { AppContext } from "../store/appContext.js";

function Characters() {
    const { store, actions } = useContext(AppContext);
    const { people } = store;

    return (
        <div className="container">
            <div className="row">
                <h1 className="mt-5">Characters</h1>
                {people !== null && people.results.length > 0 ?
                    people.results.map((character, i) =>
                        <div className="col-4" key={i}>
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">{character.name}</h5>
                                </div>
                            </div>
                        </div>
                    ) : <h1>Loading</h1>
                }
            </div>
        </div>
    );
}

export default Characters;