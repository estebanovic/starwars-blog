import { useContext } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

function Cards(props) {
    const { store, actions } = useContext(AppContext);
    const { readList } = store;
    const [page, setPage] = useState(1);
    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        props.getData(`https://www.swapi.tech/api/${props.view}/?page=${pageNumber}&limit=9`);
    }
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    }

    
    return (
        <>
            {
                props.objects !== null && props.objects.results.length > 0 ?
                    props.objects.results.map((object, i) =>
                        <div className="col-4" key={i}>
                            <div className="card my-3">
                                <Link to={"/info"+object.url.slice(26,)}><img src={`/img/${props.view}/${getImgName(object.name)}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/250x150"}} className="card-img-top" alt="..." height={"250px"}/></Link>
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info"+object.url.slice(26,)}>{object.name}</Link></h5>
                                    <span onClick={ () => actions.setReadList(object, readList)} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : <h1 className="text-center">Loading...</h1>
            }
            < div className="col-md-12 d-flex justify-content-center py-5" >
                {
                    !!props.objects &&
                        props.objects.results.length > 0 ? (
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={9}
                            totalItemsCount={props.objects.total_records}
                            onChange={handleChangePage}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    ) : (" ")
                }
            </div >
        </>
    )
}

export default Cards;