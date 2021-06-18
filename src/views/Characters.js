import { useContext, useState } from "react";
import Pagination from "react-js-pagination";
import { AppContext } from "../store/appContext.js";

function Characters() {
    const { store, actions } = useContext(AppContext);
    const [page, setPage] = useState(1);
    const { people } = store;


    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        actions.getPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="mt-5">Characters</h1>
                {people !== null && people.results.length > 0 ?
                    people.results.map((character, i) =>
                        <div className="col-4" key={i}>
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title">{character.name}</h5>
                                    <span href="#" className="btn btn-warning"><i class="fas fa-bookmark"></i></span>
                                </div>
                            </div>
                        </div>
                    ) : <h1 className="text-center">Loading...</h1>
                }
            </div>
            <div className="col-md-12 d-flex justify-content-center py-5">
                {
                    !!people &&
                        people.results.length > 0 ? (
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={9}
                            totalItemsCount={people.total_records}
                            onChange={handleChangePage}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    ) : (" ")
                }
            </div>
            <br />
        </div>
    );
}

export default Characters;