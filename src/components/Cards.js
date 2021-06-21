import { useState } from "react";
import Pagination from "react-js-pagination";

function Cards(props) {
    const [page, setPage] = useState(1);
    const handleChangePage = pageNumber => {
        setPage(pageNumber);
        props.getData(`https://www.swapi.tech/api/${props.view}/?page=${pageNumber}&limit=9`);
    }

    
    return (
        <>
            {
                props.objects !== null && props.objects.results.length > 0 ?
                    props.objects.results.map((object, i) =>
                        <div className="col-4" key={i}>
                            <div className="card my-3">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title">{object.name}</h5>
                                    <span href="#" className="btn btn-warning"><i className="fas fa-bookmark"></i></span>
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