import { useContext } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

function HomeCards(props) {
    const { store, actions } = useContext(AppContext);
    const { readList } = store;
    const [page, setPage] = useState(1);
    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        props.getData(`https://www.swapi.tech/api/${props.view}/?page=${pageNumber}&limit=9`);
    }


    return (
        <>
            {

                props.objects !== null && props.objects.results.length > 0 ?
                    <div className="row">
                        <div className="col-4">
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[0].url.slice(26,)}>{props.objects.results[0].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[0], readList)} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[1].url.slice(26,)}>{props.objects.results[1].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[1], readList)} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[2].url.slice(26,)}>{props.objects.results[2].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[2], readList)} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <h1 className="text-center">Loading...</h1>
            }

        </>
    )
}

export default HomeCards;