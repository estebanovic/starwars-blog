import { useContext } from "react";
import { AppContext } from "../store/appContext.js";

function Starships() {
    const { store, actions } = useContext(AppContext);
    const { starships } = store;


    return (
        <div className="container mb-5">
            <div className="row">
            <h1 className="mt-5">Starships</h1>
            
            {starships !== null && starships.results.length > 0 ?
                    starships.results.map((starship, i) =>
                        <div className="col-4" key={i}>
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title">{starship.name}</h5>
                                    <span href="#" className="btn btn-warning"><i class="fas fa-bookmark"></i></span>
                                </div>
                            </div>
                        </div>
                    ) : <h1>Loading</h1>
                }
            </div>
            <br/>
        </div>
    );
}

export default Starships;