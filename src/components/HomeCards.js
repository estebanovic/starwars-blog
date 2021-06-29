import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

function HomeCards(props) {
    const { store, actions } = useContext(AppContext);
    const { readList } = store;
    const getImgName = name => {
        return name.toLowerCase().split(" ").join("-") + ".jpg";
    }

    return (
        <>
            {

                props.objects !== null && props.objects.results.length > 0 ?
                    <div className="row">
                        <div className="col-4">
                            <div className="card my-3">
                            <Link to={"/info"+props.objects.results[0].url.slice(26,)}><img src={`/img/${props.view}/${getImgName(props.objects.results[0].name)}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/250x150"}} className="card-img-top" alt="..." height={"250px"}/></Link>
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[0].url.slice(26,)}>{props.objects.results[0].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[0])} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card my-3">
                            <Link to={"/info"+props.objects.results[1].url.slice(26,)}><img src={`/img/${props.view}/${getImgName(props.objects.results[1].name)}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/250x150"}} className="card-img-top" alt="..." height={"250px"}/></Link>
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[1].url.slice(26,)}>{props.objects.results[1].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[1])} href="#" className="btn btn-warning">
                                        <i className="fas fa-bookmark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card my-3">
                            <Link to={"/info"+props.objects.results[2].url.slice(26,)}><img src={`/img/${props.view}/${getImgName(props.objects.results[2].name)}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/250x150"}} className="card-img-top" alt="..." height={"250px"}/></Link>
                                <div className="card-body d-flex flex-row justify-content-between">
                                    <h5 className="card-title"><Link to={"/info" + props.objects.results[2].url.slice(26,)}>{props.objects.results[2].name}</Link></h5>
                                    <span onClick={() => actions.setReadList(props.objects.results[2])} href="#" className="btn btn-warning">
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