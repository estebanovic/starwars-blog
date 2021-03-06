import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../store/appContext";

function NavBar() {
    const { store, actions } = useContext(AppContext);
    const { readList } = store;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container justify-content-center">
                <Link className="navbar-brand" to="/"><img src={`/img/star-wars-logo.svg`} alt="" width="40" className="d-inline-block align-text-top"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">PLanets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/species">Species</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown ">
                            <a className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                ReadList
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                { readList.length > 0?
                                    //lista con mas de un dato
                                    readList.map((object, i) => 
                                        <li key={i}><div className="d-flex justify-content-between m-2"><span><Link to={"/info"+object.url.slice(26,)}>{object.name}</Link></span><i className="fas fa-times p-2" onClick={ () => actions.removeReadList(object)}></i></div></li> ) 
                                        : 
                                    //lista vacia
                                    <li><div className="d-flex justify-content-between m-2"><span>vac??o</span></div></li>
                                }
                                
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;